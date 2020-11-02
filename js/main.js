$(document).ready(function () {
	$(".consist-slide").slick({
		arrows: false,
		dots: false,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: "linear",
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		swipe: false,
		adaptiveHeight: true,
	});

	$(".room__item").click(function () {
		var target = Number($(this).attr("data-target"));
		$(".consist-slide").slick("slickGoTo", target, false);
	});

	// Диалоговое окно
	$(".popup-modal__button").magnificPopup({
		type: "inline",
		preloader: false,
		modal: true,
	});
	$(document).on("click", ".popup-modal-dismiss", function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});

	var types = {
		afterRepair: [
			"Очистка стен от мелкодисперсной пыли",
			"Обеспыливание стен, потолка, мебели и фурнитуры",
			"Сухая и влажная уборка всех поверхностей, внешних фасадов, бытовой техники, мебели",
			"Протираем корпусную мебель снаружи и внутри (если они пустые)",
			"Удаление следов цемента, шпаклевки, затирки, бетона и различных растворов",
			"Очистка поверхностей от мелких строительных отходов и мусора",
			"Мытье плинтусов и пола от различных загрязнений",
			"Удаляем пыль и загрязнения с радиаторов и подоконников",
			"Протираем все осветительные приборы, бра, люстры, торшеры",
			"Чистим стеклянные и зеркальные поверхности",
			"Протираем и обеспыливаем двери, проемы, фурнитуру, розетки, выключатели",
			"Моем столешницу, вытяжку, кухонный фартук",
			"Удаляем грязь и строительный мусор из трудно доступных мест",
			"Распаковка бытовой техники, мебели, аккуратно снимем защитную пленку и все протрем (при необходимости)",
			"Моем сантехнику, душевую кабину, ванную",
			"Протираем плитку",
			"Пылесосим, влажная уборка плинтусов и пола",
		],
		general: [
			"Протираем все доступные внешние поверхности",
			"Отодвигаем мебель и протираем под ней",
			"Протираем мебель снаружи и внутри",
			"Чистим зеркала и стеклянные поверхности",
			"Пылесосим мягкую мебель",
			"Моем осветительные приборы (торшеры, бра, напольные люстры)",
			"Обеспыливаем стены и радиаторы",
			"Моем плинтуса и пол",
			"Убираем пыль с бытовых приборов и предметов интерьера",
			"Складываем одежду ",
			"Застилаем кровать и меняем постельном белье (по желанию клиента)",
			"Моем дверные блоки( дверь, наличники, замки)",
			"Моем ванную, душевую кабину, раковину",
			"Чистим кафель на полу и стенах",
			"Чистим и дезинфицируем сантехнику",
			"Моем труднодоступные места",
			"Моем и чистим снаружи и внутри кухонную технику",
			"Моем и обезжириваем фартук, столешницу",
			"Моем раковину, посуду в ней, смеситель",
		],
		standart: [
			"Протираем доступные повехности",
			"Очищаем заркала и стеклянные поверхности",
			"Складываем вещи",
			"Заправляем кровати, меняем постельное белье (по желанию клиента)",
			"Делаем влажную и сухую протирку техники",
			"Чистим и дезинфицируем сантехнику",
			"Моем посуду и раковину",
			"Моем ванну и душевую кабину",
			"Моем полы и плинтуса",
			"Пылесосим ковры и коврики",
		],
	};

	types.standart.forEach(function (item) {
		var typeLIstItem = document.createElement("li");
		typeLIstItem.classList.add("type-list__item");
		typeLIstItem.innerText = item;
		document
			.querySelector("#types__modal-standart .type-list")
			.appendChild(typeLIstItem);
	});

	types.general.forEach(function (item) {
		var typeLIstItem = document.createElement("li");
		typeLIstItem.classList.add("type-list__item");
		typeLIstItem.innerText = item;
		document
			.querySelector("#types__modal-general .type-list")
			.appendChild(typeLIstItem);
	});

	types.afterRepair.forEach(function (item) {
		var typeLIstItem = document.createElement("li");
		typeLIstItem.classList.add("type-list__item");
		typeLIstItem.innerText = item;
		document
			.querySelector("#types__modal-afterRepair .type-list")
			.appendChild(typeLIstItem);
	});

	// попап с подробным types окно
	$(".popup-modal__button").magnificPopup({
		type: "inline",
		preloader: false,
		modal: true,
	});
	$(document).on("click", ".popup-modal-dismiss", function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});

	//types slider
	$(".types-slider").slick({
		dots: false,
		arrows: false,
		infinite: false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					dots: true,
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					dots: true,
					slidesToShow: 1,
				},
			},
		],
	});
	//reviews slider
	$(".reviews-slider").slick({
		dots: false,
		arrows: false,
		infinite: false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					dots: true,
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					dots: true,
					slidesToShow: 1,
				},
			},
		],
	});

	$('input[type="tel"]').inputmask("+9(999)999-99-99");

	$(".scrollto").mPageScroll2id();

	// Calc

	var summary = 0;

	$(".calc input, .calc select").click(function () {
		if ($(this).attr("name") === "apart-type") {
			$(".apart-type").text($(this).val());
			$(".modal__form input[name=apart-type]").val($(this).val());
		} else if ($(this).attr("name") === "cleaning-type") {
			$(".type").text($(this).val());
			$(".modal__form input[name=type]").val($(this).val());
		} else if ($(this).attr("name") === "period") {
			$(".period").text($(this).val());
			$(".modal__form input[name=period]").val($(this).val());
		} else if ($(this).attr("name") === "rooms") {
			$(".rooms").text($(this).val());
			$(".modal__form input[name=rooms]").val($(this).val());
		}

		summary = 0;

		[...document.querySelectorAll(".calc input:checked")].forEach(function (
			item
		) {
			console.log(item);
			summary = summary + Number($(item).attr("data-price"));
		});

		$(".price-title span").text(summary);
		$(".modal__form input[name=summary]").val(summary);
	});

	$(".calc-options input").click(function () {
		$(".options__list").empty();

		var optionsArr = [
			...document.querySelectorAll(".calc-options input:checked"),
		];
		if (optionsArr.length === 0) {
			$(".not-checked").fadeIn(0);
			$(".checked").fadeOut(0);
		} else {
			$(".not-checked").fadeOut(0);
			$(".checked").fadeIn(0);
		}

		optionsArr.forEach(function (item) {
			$(".options__list").append(
				'<li class="options__item">' + $(item).val() + "</li>"
			);
		});

		var order = "";

		$(".popup-modal__button").click(function () {
			order = "";
			optionsArr.forEach(function (item) {
				console.log($(item).val());
				order = order + $(item).val() + "\n";
				$("input[name=userOrder]").val(order);
			});
		});
	});

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$(".modal__form").submit(function () {
		//Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize(),
		}).done(function () {
			// $(".popup").fadeOut();
			// $("#popup__thanks").fadeIn().css("display", "flex");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
				$(".popup-modal-dismiss").click();
			}, 1000);
			setTimeout(function () {
				// Done Functions
				// $(".popup").fadeOut();
				console.log("Done");
			}, 3000);
			// fbPixelTrackID();
		});
		return false;
	});
});
