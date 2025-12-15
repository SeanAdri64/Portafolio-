$(window).on('scroll', function () {
            if ($(this).scrollTop() > 80) {
                $('.navbar').addClass('shadow');
            } else {
                $('.navbar').removeClass('shadow');
            }
        });



        // Modal dinámico de proyectos
        $('.project-card').on('click', function () {
            const title = $(this).data('title');
            const desc = $(this).data('desc');
            const img = $(this).data('img');
            const video = $(this).data('video');


            $('#modalTitle').text(title);
            $('#modalDesc').text(desc);
            $('#modalImg').attr('src', img);
            $('#modalVideo').attr('src', video);
        });


        const observer = new IntersectionObserver(entries => {
  if (entry.isIntersecting) {
    entry.target.classList.add('animate__fadeInUp');
  }
});
