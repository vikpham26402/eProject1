(function (window) {
  'use strict';
  var listProduct=[
    {
      Id:"1",
      Name: "Puma1",
      Price: "300$",
      Image: "img/puma/Classics-Men's-Logo-Tee.jpg",
      Brand: "Puma",
      Product__year: "2019",
      product__material: "TPU"

    },
    {
      Id:"2",
      Name: "Puma2",
      Price: "300$",
      Image: "img/puma/Porsche-Design-Crossbody-Bag.jpg",
      Brand: "Puma",
      Product__year: "2019",
      product__material: "TPU"

    },
    {
    Id:"3",
        Name: "Puma3",
        Price: "300$",
        Image: "img/puma/sportswear-t-shirt-Jn5HzC.jpg",
        Brand: "Puma",
        Product__year: "2019",
        product__material: "TPU"

    },
    {
        Id:"4",
        Name: "Puma4",
        Price: "300$",
        Image: "img/puma/PUMA-x-CLOUD9-Beanie.jpg",
        Brand: "Puma",
        Product__year: "2019",
        product__material: "TPU"

    },
    {
        Id:"5",
        Name: "Puma5",
        Price: "300$",
        Image: "img/puma/p1.jpg",
        Brand: "Puma",
        Product__year: "2019",
        product__material: "TPU"

    },
    {
        Id:"6",
        Name: "Puma6",
        Price: "300$",
        Image: "img/puma/p2.jpg",
        Brand: "Puma",
        Product__year: "2019",
        product__material: "TPU"

    },
    {
        Id:"7",
        Name: "Puma7",
        Price: "300$",
        Image: "img/puma/p3.jpg",
        Brand: "Puma",
        Product__year: "2019",
        product__material: "TPU"

    },
    {
        Id:"8",
        Name: "Puma8",
        Price: "300$",
        Image: "img/puma/p5.jpg",
        Brand: "Puma",
        Product__year: "2019",
        product__material: "TPU"

    },
    {
        Id:"9",
        Name: "Puma9",
        Price: "300$",
        Image: "img/puma/p6.jpg",
        Brand: "Puma",
        Product__year: "2019",
        product__material: "TPU"
    },
  ];
  var showProducts=listProduct.map(function (o) {
      return `
      
      <div class="product">
			<div class="product__info">
				<img class="product__image" src="${o.Image}" alt="Product ${o.Id}" />
				<h3 class="product__title">${o.Name}</h3>
				<span class="product__brand extra highlight">${o.Brand}</span>
        <span class="product__year extra highlight">${o.Product__year}</span>
        <span class="product__material extra highlight">${o.product__material}</span>
        <span class="product__price highlight">$${o.Price}</span>
				<button class="action action--button action--buy">
					<i class="fa fa-shopping-cart"></i>
					<span class="action__text">Add to cart</span>
				</button>
			</div>
			<label class="action action--compare-add">
				<input class="check-hidden" type="checkbox" />
				<i class="fa fa-plus"></i>
				<i class="fa fa-check"></i>
				<span class="action__text action__text--invisible">Add to compare</span>
			</label>
		</div>
  `
  });
  $('.grid').append(showProducts);
  function classReg( className ) {
      return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
  }
    
    // classList support for class management
    // altho to be fair, the api sucks because it won't accept multiple classes at once
    var hasClass, addClass, removeClass;
    
    if ( 'classList' in document.documentElement ) {
      hasClass = function( elem, c ) {
        return elem.classList.contains( c );
      };
      addClass = function( elem, c ) {
        elem.classList.add( c );
      };
      removeClass = function( elem, c ) {
        elem.classList.remove( c );
      };
  }
    else {
      hasClass = function( elem, c ) {
        return classReg( c ).test( elem.className );
      };
      addClass = function( elem, c ) {
        if ( !hasClass( elem, c ) ) {
          elem.className = elem.className + ' ' + c;
        }
      };
      removeClass = function( elem, c ) {
        elem.className = elem.className.replace( classReg( c ), ' ' );
      };
  }
    
    function toggleClass( elem, c ) {
      var fn = hasClass( elem, c ) ? removeClass : addClass;
      fn( elem, c );
  }
    
    var showProduct = {
      // full names
      hasClass: hasClass,
      addClass: addClass,
      removeClass: removeClass,
      toggleClass: toggleClass,
      // short names
      has: hasClass,
      add: addClass,
      remove: removeClass,
      toggle: toggleClass
  };
    
    // transport
    if ( typeof define === 'function' && define.amd ) {
      // AMD
      define( showProduct );
  } else if ( typeof exports === 'object' ) {
      // CommonJS
      module.exports = showProduct;
  } else {
      // browser global
      window.showProduct = showProduct;
  }
    
})(window);