<!-- Bagian lain tetap sama... -->

    <script>
        var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");

        function opentab(tabname) {
            for (tablink of tablinks) {
                tablink.classList.remove("active-link");
            }
            for (tabcontent of tabcontents) {
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }

        function navigateToSection(sectionId) {
            var section = document.getElementById(sectionId);
            section.scrollIntoView({ behavior: 'smooth' });
            toggleMobileMenu(); // Tutup menu mobile setelah navigasi
        }

        function toggleMobileMenu() {
            var navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('show');
        }
    </script>
</body>
</html>