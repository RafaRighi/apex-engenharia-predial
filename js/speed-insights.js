/**
 * Vercel Speed Insights - Standalone Implementation
 * Based on @vercel/speed-insights v2.0.0
 * 
 * This script initializes Vercel Speed Insights for performance monitoring.
 * It automatically tracks Core Web Vitals (LCP, FID, CLS, FCP, TTFB) and sends
 * them to Vercel's Speed Insights dashboard.
 * 
 * The script will only send data in production environments.
 */

(function() {
  'use strict';

  // Initialize queue for Speed Insights
  var initQueue = function() {
    if (window.si) return;
    window.si = function() {
      window.siq = window.siq || [];
      window.siq.push(arguments);
    };
  };

  // Check if we're in a browser environment
  function isBrowser() {
    return typeof window !== 'undefined';
  }

  // Detect environment (development or production)
  function detectEnvironment() {
    try {
      var env = typeof process !== 'undefined' && process.env && process.env.NODE_ENV;
      if (env === 'development' || env === 'test') {
        return 'development';
      }
    } catch (e) {
      // Ignore errors
    }
    return 'production';
  }

  function isDevelopment() {
    return detectEnvironment() === 'development';
  }

  // Get the script source URL
  function getScriptSrc(props) {
    if (props.scriptSrc) {
      return makeAbsolute(props.scriptSrc);
    }
    if (isDevelopment()) {
      return 'https://va.vercel-scripts.com/v1/speed-insights/script.debug.js';
    }
    if (props.dsn) {
      return 'https://va.vercel-scripts.com/v1/speed-insights/script.js';
    }
    // Default: Use Vercel's auto-injected path
    return '/_vercel/speed-insights/script.js';
  }

  // Make URL absolute
  function makeAbsolute(url) {
    if (!url) return url;
    return url.startsWith('http://') || url.startsWith('https://') || url.startsWith('/') 
      ? url 
      : '/' + url;
  }

  // Load configuration and prepare dataset
  function loadProps(explicitProps) {
    var props = explicitProps || {};
    var dataset = {
      sdkn: '@vercel/speed-insights',
      sdkv: '2.0.0'
    };

    if (props.sampleRate) {
      dataset.sampleRate = props.sampleRate.toString();
    }
    if (props.route) {
      dataset.route = props.route;
    }
    if (isDevelopment() && props.debug === false) {
      dataset.debug = 'false';
    }
    if (props.dsn) {
      dataset.dsn = props.dsn;
    }
    if (props.endpoint) {
      dataset.endpoint = makeAbsolute(props.endpoint);
    }

    return {
      src: getScriptSrc(props),
      beforeSend: props.beforeSend,
      dataset: dataset
    };
  }

  // Main injection function
  function injectSpeedInsights(props) {
    if (!isBrowser() || (props && props.route === null)) return null;
    
    initQueue();
    
    var config = loadProps(props || {});
    var src = config.src;
    var dataset = config.dataset;
    var beforeSend = config.beforeSend;
    
    // Check if script is already loaded
    if (document.head.querySelector('script[src*="' + src + '"]')) {
      return null;
    }
    
    // Set up beforeSend hook if provided
    if (beforeSend && window.si) {
      window.si('beforeSend', beforeSend);
    }
    
    // Create and configure the script element
    var script = document.createElement('script');
    script.src = src;
    script.defer = true;
    
    // Add data attributes
    for (var key in dataset) {
      if (dataset.hasOwnProperty(key)) {
        script.setAttribute('data-' + key.toLowerCase(), dataset[key]);
      }
    }
    
    // Error handling
    script.onerror = function() {
      console.log(
        '[Vercel Speed Insights] Failed to load script from ' + src + 
        '. Please check if any content blockers are enabled and try again.'
      );
    };
    
    // Inject the script
    document.head.appendChild(script);
    
    return {
      setRoute: function(route) {
        if (route) {
          script.setAttribute('data-route', route);
        } else {
          script.removeAttribute('data-route');
        }
      }
    };
  }

  // Initialize Speed Insights
  // Configuration options:
  // - debug: Enable debug logging (default: true in development, false in production)
  // - sampleRate: Percentage of events to send (0-1, default: 1)
  // - route: Current route for SPA tracking
  // - beforeSend: Function to modify events before sending
  // - dsn: Data Source Name for self-hosted installations
  // - endpoint: Custom endpoint URL
  // - scriptSrc: Custom script source URL
  injectSpeedInsights({
    // Automatically uses production mode when deployed on Vercel
    debug: false
  });

  // Expose for manual control if needed
  window.vercelSpeedInsights = {
    inject: injectSpeedInsights
  };

})();
