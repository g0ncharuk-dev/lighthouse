$(document).ready(function () {
    const $carousel = $('.work-slider').flickity({
        "cellSelector": ".item",
        prevNextButtons: false,
        pageDots: false,
        on: {
            ready: function () {
                $('.works-title-text h2')
                    .html($(this.selectedCell.element)
                        .attr('data-title'));
            },
            change: function () {
                $('.works-title-text h2')
                    .html($(this.selectedCell.element)
                        .attr('data-title'));
            }
        }
    });
    $('.work-slider-prev').on('click', function () {
        $carousel.flickity('previous');
    });
    $('.work-slider-next').on('click', function () {
        $carousel.flickity('next');
    });
    $(window).on('resize', function () {
        $carousel.flickity('resize');
    })


    $('.work-slider').magnificPopup({
        delegate: '.item-detailed',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: true,
        mainClass: '',
        image: {
            markup:
            '<div class="work-magnific">' +
            '<div class="container-fluid position-relative">' +
            '<div class="mfp-top-bar d-flex flex-wrap justify-content-end align-items-center">' +
            '<div class="mfp-title"></div>' +
            '<div class="mfp-close">x</div>' +
            '<div class="d-flex align-items-center">' +
            '<div class="button-nav button-prev"></div>' +
            '<div class="mfp-counter text-center">%curr% / %total%</div>' +
            '<div class="button-nav  button-next"></div>' +
            '</div>' +
            '</div>' +
            '<div>' +
            '<div class="mfp-img"></div>' +
            '</div>' +
            '<div class="mfp-bottom-bar col-12 col-lg-5"></div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>',
            verticalFit: true,
            titleSrc: function (item) {
                return item.el.closest('.item').attr('data-title');
            }
        },
        gallery: {
            enabled: true,
            tCounter: '<span class="mfp-counter">%curr% / %total%</span>',
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            navigateByImgClick: false,
        },
        callbacks: {
            elementParse: function (item) {
                item.src = item.el.closest('.item').find('img').prop('src');
            },
            change: function () {
                $carousel.flickity( 'select', this.index );
                $(this.content)
                    .find('.mfp-bottom-bar')
                    .html(
                        '<p>' +
                        $(this.currItem.el).closest('.item').attr('data-description') +
                        '</p>'
                    );
            },

            buildControls: function () {
                $(this.content)
                    .find('.button-prev')
                    .append(this.arrowLeft);

                $(this.content)
                    .find('.button-next')
                    .append(this.arrowRight);
                console.log(

                )
            }
        },
    });
});