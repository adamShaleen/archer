angular.module('archer').service('service', function() {

//--------------Picture Carousel---------------------------------------------------------------------------------------------------

var pics = ['img/baby_tug.JPG', 'img/carry_hike.JPG', 'img/driving.JPG', 'img/moab.JPG', 'img/hidden_valley.JPG', 'img/sibling_tug.JPG', 'img/zion.JPG'];
var i = 0;
this.current = 'img/baby_tug.JPG';

this.picShow = function() {
    i += 1;
    if (i === 7) {
        i = 0;
    }

    this.current = pics[i];

};

//----------------Dissapearing load bar-------------------------------------------------

this.loading = function() {
    setTimeout(function() {
        $('#loading').fadeOut('fast');
    }, 1800);
};

this.loading();
//-----------------------------------------------------------------


this.aboutText = "Hi! I'm Archer, and I'm an Australian cattle dog.  I was born on a farm in southern Utah, July 17th, 2015. I love to play with my sister, Willow, go on hikes with my mom and dad, and rampage in the snow!";
this.mapText = "Here's a list of all the awesome places I like to go; the dog park, a bunch of super cool mountain trails, and Willow's house.  If you see me coming down the trail, get outta the way!";

this.getAboutText = function() {
    return this.aboutText;
};

this.getMapText = function() {
    return this.mapText;
};

});
