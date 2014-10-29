(function($) { 
  'use strict';
  $.fn.wrapLines = function(options) {
    var options = $.extend({
      lineWrap: 'span',
      lineClassPrefix: 'wrapliner wrap_line_',
      wordClassPrefix: 'w_line_',
      index: 0,
      offsetTop: 0,
      offsetLeft: 0
    }, options);
    return this.each(function() {
      options.index = 0;
      options.offset = 0;
      var parentElm = $(this);
      var elmText = $(parentElm).html();
      $(parentElm).html(function(ind, htm) {
        var $repText = '<' + options.lineWrap + '>' + elmText.replace(/(<\s*.*?[^>]*>(.*?)<\s*\s*.*?>)|(\s+)/ig, '$1 </' + options.lineWrap + '><' + options.lineWrap + '>');
        $repText = $repText + '</' + options.lineWrap + '>';
        return $repText;
      });
      $(options.lineWrap, parentElm).each(function() {
        var spanOffset = $(this).offset();
        if (spanOffset.top > options.offsetTop) {
          options.offsetTop = spanOffset.top;
          options.index++;
        }
        $(this).addClass(options.wordClassPrefix + options.index);
      });


      for (var x = 1; x <= options.index; x++) {
        $('.' + options.wordClassPrefix + x, parentElm)
          .wrapAll('<' + options.lineWrap + ' class="' + options.lineClassPrefix + x + '" />');
        var innerText = $('.' + options.lineClassPrefix + x, parentElm).text();
        $('.' + options.lineClassPrefix + x, parentElm).text(function() {
          return innerText;
        });
      }
    });
  };
})(jQuery);

var $window = $(window);
var $body = $('body');
var con = $('#content');
var contH = con.outerHeight();

var scalePage = function() {
  winH = $window.height();
  con.css({
    paddingBottom: winH
  });
  contH = con.outerHeight();

  $body.css({
    height: contH - winH / 2
  });

};


var initPage = function() {

  var diagonalBlocks = $('p, h1, h2, h3, h4, h5, h6, fieldset, blockquote, ul, ol',con);
  var heights = 0;
  var heightsInner = 0;  
  diagonalBlocks.wrapLines();  
  var diagonalInline = $('li', con);
  diagonalInline.wrapLines();  
  diagonalBlocks.each(function() {
    var $this = $(this);
    var ind = $this.index();
    var thisHeight = $this.outerHeight(true);
    if ($this.is(':first-child')) {
      heightsInner = 0;
    }
    if (!Modernizr.csstransforms3d && Modernizr.csstransforms) {
      $this.css({
        transform: 'translate(' + heightsInner + 'px,0)'
      });
    } else if (Modernizr.csstransforms3d && Modernizr.csstransforms) {
      $this.css({
        transform: 'translate3d(' + heightsInner + 'px,0,0)'
      });
    }
    if (!Modernizr.csstransforms) {
      $this.css({
        marginLeft: heightsInner
      });
    }
    heightsInner += thisHeight;
  });
  


  $window.on('touchmove scroll', function() {
    winScroll = $window.scrollTop() * -1;
    if (!Modernizr.csstransforms3d && Modernizr.csstransforms) {
      con.css({
        transform: 'translate(' + winScroll + 'px,' + winScroll + 'px)'
      });
    } else if (Modernizr.csstransforms3d && Modernizr.csstransforms) {
      con.css({
        transform: 'translate3d(' + winScroll + 'px,' + winScroll + 'px,0)'
      });
    }
    if (!Modernizr.csstransforms) {
      con.css({
        left: winScroll,
        top: winScroll
      });
    }
  });
};

$window.trigger('scroll resize');

scalePage();
initPage();
$body.css({opacity: 1});
