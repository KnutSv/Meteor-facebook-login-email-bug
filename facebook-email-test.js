if (Meteor.isClient) {

  Template.facebookTest.helpers({
    userEmail: function(){
      if ( Meteor.user() && Meteor.user().hasOwnProperty('emails') )
        return Meteor.user().emails[0].address;
      else if (Meteor.user()) {
        return "Logged in but no email";
      } else {
        return "Not logged in";
      }

    }
  });

  Template.facebookTest.events({
    'click button[data-action=facebook]': function (e) {
      e.preventDefault();

      Meteor.loginWithFacebook({requestPermissions: ['email']}, function(error){
        if (error) {
          console.log(error);
        }
      });
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // first, remove configuration entry in case service is already configured
    Accounts.loginServiceConfiguration.remove({
      service: "facebook"
    });
    Accounts.loginServiceConfiguration.insert({
      service: "facebook",
      appId: "xxx",
      secret: "xxx"
    });

  });
}
