angular.module('archer').service('service', function() {

//-----------------------------------------------------------------
// Dissapearing load bar
this.loading = function() {
    setTimeout(function() {
        $('#loading').fadeOut('fast');
    }, 2000);
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
