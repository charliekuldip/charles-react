// CLASS HELPERS
export function hasClass(el, className) {
  if (el.classList)
    return el.classList.contains(className)
  else
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
};

export function addClass(el, className) {
  if (el.classList)
    el.classList.add(className)
  else if (!hasClass(el, className)) el.className += " " + className
};

export function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className)
  else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    el.className=el.className.replace(reg, ' ')
  }
};

// DOM TRAVERSAL
export function findAncestor(el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
};

// UTIL
/*----- disable pointer events on scroll-------*/
export function disablepointeronscroll() {
  var scrolltimer;

  window.addEventListener('scroll', function(){
      clearTimeout(scrolltimer);

      if(document.body.className.indexOf('disable-hover') == -1) {
          document.body.className += ' disable-hover';
      }

      scrolltimer = setTimeout(function(){
          var classes = document.body.className.split(" ");
          for(var i = 0; i<classes.length; i++){
              if( classes[i] == 'disable-hover' )
                  classes.splice(i,1);
          }
          document.body.className = classes.join(" ");
      },200);
  }, false);
};

export const toggleOutlines = ()=> {
  let body = document.getElementsByTagName('body')[0];
  if(body.classList.contains('outlines')) {
    body.removeAttribute('class', 'outlines');
  } else {
    body.setAttribute('class','outlines');
  }
};