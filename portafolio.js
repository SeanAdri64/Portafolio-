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

const modal = document.getElementById("projectModal");
const iframe = document.getElementById("modalVideo");

modal.addEventListener("show.bs.modal", function (event) {
  const card = event.relatedTarget;

  document.getElementById("modalTitle").textContent =
    card.getAttribute("data-title");

  document.getElementById("modalDesc").textContent =
    card.getAttribute("data-desc");

  iframe.src = card.getAttribute("data-video") + "?autoplay=1";
});

modal.addEventListener("hidden.bs.modal", function () {
  iframe.src = "";
});

