
$(document).ready(function() {

    // $('.page-container form').submit(function(){
    //     var username = $(this).find('.username').val();
    //     var password = $(this).find('.password').val();
    //     if(username == '') {
    //         $(this).find('.error').fadeOut('fast', function(){
    //             $(this).css('top', '27px');
    //         });
    //         $(this).find('.error').fadeIn('fast', function(){
    //             $(this).parent().find('.username').focus();
    //         });
    //         return false;
    //     }
    //     if(password == '') {
    //         $(this).find('.error').fadeOut('fast', function(){
    //             $(this).css('top', '96px');
    //         });
    //         $(this).find('.error').fadeIn('fast', function(){
    //             $(this).parent().find('.password').focus();
    //         });
    //         return false;
    //     }
    // });

    // $('.page-container form .username, .page-container form .password').keyup(function(){
    //     $(this).parent().find('.error').fadeOut('fast');
    // });

    function onSuccess(googleUser) {
    var profile = googleUser.getBasicProfile();
    gapi.client.load('plus', 'v1', function () {
        var request = gapi.client.plus.people.get({
            'userId': 'me'
        });
        //Display the user details
        request.execute(function (resp) {
            var profileHTML = '<div class="profile"><div class="head">Welcome '+resp.name.givenName+'! <a href="javascript:void(0);" onclick="signOut();">Sign out</a></div>';
            profileHTML += '<img src="'+resp.image.url+'"/><div class="proDetails"><p>'+resp.displayName+'</p><p>'+resp.emails[0].value+'</p><p>'+resp.gender+'</p><p>'+resp.id+'</p><p><a href="'+resp.url+'">View Google+ Profile</a></p></div></div>';
            $('.userContent').html(profileHTML);
            $('#gSignIn').slideUp('slow');
        });
    });
}
    function onFailure(error) {
        alert(error);
    }
    function renderButton() {
        gapi.signin2.render('gSignIn', {
            'scope': 'profile email',
            'width': 240,
            'height': 50,
            'longtitle': true,
            'theme': 'dark',
            'onsuccess': onSuccess,
            'onfailure': onFailure
        });
    }
    function signOut() {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            $('.userContent').html('');
            $('#gSignIn').slideDown('slow');
        });
    }

});
