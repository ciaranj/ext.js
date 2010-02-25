
// ext.js - Object - Copyright TJ Holowaychuk <tj@vision-media.ca> (MIT Licensed)

/**
 * Dummy clone constructor.
 */

function Clone() {}

// --- Extensions

Ext.extend(Object.prototype, {
  
  /**
   * Return a shallow clone.
   *
   * @return {mixed}
   * @api public
   */
  
  get clone() {
    Clone.prototype = this
    return new Clone
  },
  
  /**
   * Return own property keys.
   *
   *  { foo: 'bar' }.keys
   *  // => ['foo']
   *
   * @return {array}
   * @api public
   */
  
  get keys() {
    return Object.keys(this)
  }
})