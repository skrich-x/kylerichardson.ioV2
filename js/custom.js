/* Theme Name: Worthy - Free Powerful Theme by HtmlCoder
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Version:1.0.0
 * Created:November 2014
 * License: Creative Commons Attribution 3.0 License (https://creativecommons.org/licenses/by/3.0/)
 * File Description: Place here your custom scripts
 */

// //Toaster Call//
//  $(document).ready(function() {
//      toastr.options.timeOut = 1500; // 1.5s
//      toastr.info('Page Loaded!');
//      $('#logo').click(function() {
//         toastr.success('Click Button');
//      });
//    });

//tooltipster js//
  $(document).ready(function() {
    $('.tooltip').tooltipster();
    $('.tooltip').tooltipster({
   animation: 'fade',
   delay: 200,
   theme: 'tooltipster-default',
   touchDevices: false,
   trigger: 'hover'
});
  });
