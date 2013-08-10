// ==========================================================================
// Project:     Auto Completion
// Description: Auto complete the input with left text selected.
// License:     Licensed under the MIT license (see LICENCE)
// Version:     0.1.0
// ==========================================================================
!function($) {
  $.fn.autocomplete = function(options) {
    var self = this;
    var target = options.target;

    options = options || {};

    $.merge(options, {
      text: '',
      running: false,
      filled: false
    });

    function check (text) {
      var offset = 0;
      for (var i = 0; i < options.items.length; i++) {
        item = options.items[i];
        offset = item.indexOf(text);
        if (offset === 0) {
          return item.substring(text.length);
        }
      }
    }

    function complete(text) {
      target.text(text);
    }

    var merge = $.merge($(), self);
    merge = $.merge(merge, target)

    merge
      .on('mousedown', function(e) {
        if (options.filled) {
          return;
        } else {
          options.filled = true;
        }

        if (options.text) {
          window.setTimeout(function() {
            var sel = window.getSelection();
            var pos = window.getSelection().baseOffset;
            var range = document.createRange();
            self.text(options.text);
            range.setStart(self.get(0).childNodes[0], pos);
            range.collapse(true);
            sel.removeAllRanges();
            sel.addRange(range);
          }, 0);
        }
      })

      .on('blur', function() {
        if (options.filled) {
          return;
        } else {
          options.filled = true;
        }

        if (options.text) {
          window.setTimeout(function() {
            self.text(options.text);
          }, 0);
        }
      });

    self
      .on('keydown', function(e) {
        if ([ 8, 46 ].indexOf(e.keyCode) !== -1) {
          if (!options.running) {
            return;
          }
          complete("");
          options.running = false;
        } else if ([ 37, 38, 39, 40 ].indexOf(e.keyCode) !== -1) {
          if (!options.running) {
            return;
          }
          if (options.filled) {
            return;
          } else {
            options.filled = true;
          }
          window.setTimeout(function() {
            var sel = window.getSelection();
            var pos = window.getSelection().baseOffset;
            var range = document.createRange();
            self.text(options.text);
            range.setStart(self.get(0).childNodes[0], pos);
            range.collapse(true);
            sel.removeAllRanges();
            sel.addRange(range);
          }, 0);
          options.running = false;
        } else if ([ 16, 17, 18, 91, 93].indexOf(e.keyCode) === -1) {
          options.running = true;
        }
      })

      .on('input', function() {
        var left,
            value;

        if (options.running === false) {
          return;
        }
           
        value = self.text();

        if (!value) {
          return complete("");
        }

        left = check(value) || "";

        options.text = value + left
        options.filled = false;

        complete(options.text);
      });
  };
}( jQuery );
