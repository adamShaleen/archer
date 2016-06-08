angular.module('archer').service('service', function() {

//--------------Picture Carousel---------------------------------------------------------------------------------------------------

var pics = ['img/baby_tug.JPG', 'img/carry_hike.JPG', 'img/trees.JPG', 'img/flowers.jpg', 'img/hidden_valley.JPG', 'img/sibling_tug.JPG', 'img/zion.JPG', 'img/stream.JPG'];
var i = 0;
this.current = 'img/baby_tug.JPG';

this.picShow = function() {
    i += 1;
    if (i === 8) {
        i = 0;
    }

    this.current = pics[i];

};


//----------------Dissapearing load bar-------------------------------------------------

this.loading = function() {
    setTimeout(function() {
        $('#loading').fadeOut('fast');
    }, 1500);
};

this.loading();


//--------------Text box script-----------------------------------

this.aboutText = "Hi! I'm Archer, and I'm an Australian cattle dog.  I was born on a farm in southern Utah, July 17th, 2015. I love to go on hikes with my mom and dad, and rampage in the snow!";
this.mapText = "Here's a map of some of my favorite places.  There's dog parks, hiking trails, and my sister's house.  If you see me coming down the trail, get outta the way!";

this.getAboutText = function() {
    return this.aboutText;
};

this.getMapText = function() {
    return this.mapText;
};

//----------------------------------------------------------------

});  // closing service tag
