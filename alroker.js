var page = require('webpage').create();
var my_dashboard = 'your_public_dashboard_id';
var my_report_name = 'your_report_name';

page.open('https://public.ducksboard.com/' + my_dashboard + '/', function () {
    setTimeout(function() {
    	page.render(my_report_name + '.pdf', {format: 'pdf'});
		phantom.exit();
    }, 5000);
});