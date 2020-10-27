$(document).ready(function () {
	let target,
		count,
		price,
		sum,
		countInput,
		totalSum,
		orderString,
		orderStringPopup;

	$(".calc .row").each(function () {
		count = $(this).find(".calc__count").attr("value");
		price = $(this).find(".calc__count").attr("data-price");
		sum = price * count;
		$(this).find(".calc__sum").text(sum);
	});

	function itemSum() {
		$(".calc .row").each(function () {
			let count = Number($(this).find(".calc__count").attr("value")),
				price = Number($(this).find(".calc__count").attr("data-price"));
			let sum = price * count;
			$(this).find(".calc__sum").text(sum);
		});
	}

	$(".calc .row").click(function (e) {
		target = e.target;
		count = $(this).find(".calc__count").attr("value");
		countInput = $(this).find(".calc__count");

		if ($(target).hasClass("calc__item")) {
			$(this).toggleClass("active");
		}

		if ($(this).hasClass("active")) {
			if ($(target).hasClass("calc__btn-dec")) {
				count = Number($(target).next().attr("value"));
				if (count > Number($(target).next().attr("data-min"))) {
					$(countInput).attr("value", count - 1);
				} else {
					console.log("Минимум");
				}
			} else if ($(target).hasClass("calc__btn-inc")) {
				count = Number($(target).prev().attr("value"));
				count++;
				$(countInput).attr("value", count);
			}
			itemSum();
		}

		if ($(target).hasClass("calc__select")) {
			price = $(target).val();
			// $(target).on('change', function() {
			$(this).find(".calc__count").attr("data-price", price);
			$(this).find(".calc__sum").text(sum);
			// })
			itemSum();
		}

		if ($(".calc .row.active").length > 0) {
			totalSum = 0;
			$(".calc .row.active .calc__sum").each(function () {
				totalSum = totalSum + Number($(this).text());
			});
			$(".calc__total, .calc__submit").addClass("active");
			$(".calc__total").text(totalSum);
		} else {
			$(".calc__total, .calc__submit").removeClass("active");
			$(".calc__total").text(0);
		}

		orderString = "";
		orderStringPopup = "";
		$(".calc .row.active").each(function () {
			orderString =
				orderString +
				`${$(this).find(".calc__item").text()} ${$(this)
					.find(".calc__count")
					.attr("value")} ${$(this)
					.find(".calc__unit")
					.text()} по цене ${$(this)
					.find(".calc__count")
					.attr("data-price")} на сумму ${$(this)
					.find(".calc__sum")
					.text()} тг` +
				"<br>";
			$(".form").find('input[name="order"]').attr("value", orderString);

			$(".form")
				.find('input[name="summary"]')
				.attr("value", $(".calc__total").text() + " тг");

			orderStringPopup =
				orderStringPopup +
				`${$(this).find(".calc__item").text()} ${$(this)
					.find(".calc__count")
					.attr("value")} ${$(this)
					.find(".calc__unit")
					.text()} по цене ${$(this)
					.find(".calc__count")
					.attr("data-price")} на сумму ${$(this)
					.find(".calc__sum")
					.text()} тг` +
				"\n";
			$(".popup__order").text(
				orderStringPopup + " Итого: " + $(".calc__total").text() + " тг"
			);
		});
	});

	$(".popup__close, .popup__overlay").click(function () {
		$(".popup").fadeOut();
	});

	$(".calc__submit").click(function () {
		$("#popup__form").fadeIn().css("display", "flex");
	});

	$('input[type="tel"]').inputmask("9(999)999-99-99");

	function fbPixelTrackID() {
		fbq("track", "Purchase");
	}

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$(".form").submit(function () {
		//Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize(),
		}).done(function () {
			$(".popup").fadeOut();
			$("#popup__thanks").fadeIn().css("display", "flex");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
			}, 1000);
			setTimeout(function () {
				// Done Functions
				$(".popup").fadeOut();
			}, 3000);
			// fbPixelTrackID();
		});
		return false;
	});

	$("#container1").twentytwenty();

	function mapInit() {
		var winH = $(window).scrollTop() + $(window).height(),
			docH = $(document).height(),
			hDelta = $("#footer2-e").height(),
			checkpoint = docH - hDelta;
		if (winH > checkpoint) {
			var src = $("#map-frame").attr("data-src");
			$("#map-frame").attr("src", src);
		}
	}

	$(document).scroll(function () {
		if ($("#map-frame").attr("src") === "") {
			mapInit();
		}
	});
});
