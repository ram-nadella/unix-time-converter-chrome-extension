(function() {
	$(function() {
        var $unixTimestamp = $('#unix_timestamp');
        var $convertedTimeLocal = $('#converted_time_local');
        var $convertedTimeGMT = $('#converted_time_gmt');
			//         $unixTimestamp.change(function() {
			// convertAndSet();
			//         });

		$unixTimestamp.keypress(function(e) {
			// e.preventDefault();
			if (e.which == 13) {
				convertAndSet($unixTimestamp.val());
			}
		});

		var convertAndSet = function(timestamp) {
            // var timestamp = $unixTimestamp.val();
			var date = new Date(timestamp * 1000);
			$convertedTimeLocal.text(date.toLocaleString());
			$convertedTimeGMT.text(date.toGMTString());
		};

		// start at now
		var now = +new Date();
		$unixTimestamp.val(now);
		convertAndSet(now);

	});
})();