<script>
// avatar imgs
import avatar1 from "../../../images/users/32/avatar-1.jpg";
import avatar2 from "../../../images/users/32/avatar-2.jpg";
import avatar3 from "../../../images/users/32/avatar-3.jpg";
import avatar4 from "../../../images/users/32/avatar-4.jpg";
import avatar5 from "../../../images/users/32/avatar-5.jpg";
import comming from "../../../images/comingsoon.png";
import success from "../../../images/success-img.png";

export default {
    data() {
        return {
            avatar1,
            avatar2,
            avatar3,
            avatar4,
            avatar5,
            comming,
        }
    },
    beforeCreate() {
        document.documentElement.setAttribute('data-theme', 'default');
    },
    mounted() {
        var mainArray = Array.from(document.querySelectorAll(".countdownlist"));
        mainArray.forEach(function (item) {
            var countdownVal = new Date().getTime() + 15000; // item.getAttribute("data-countdown") // You may use specific date for long duration of coming soon time.

            // Set the date we're counting down to
            var countDownDate = new Date(countdownVal).getTime();

            // Update the count down every 1 second
            var countDown = setInterval(function () {
                // Get today's date and time
                var currentTime = new Date().getTime();
                // Find the distance between currentTime and the count down date
                var distance = countDownDate - currentTime;

                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                var countDownBlock = '<div class="countdownlist-item">' +
                    '<div class="count-title">Days</div>' + '<div class="count-num">' + days + '</div>' +
                    '</div>' +
                    '<div class="countdownlist-item">' +
                    '<div class="count-title">Hours</div>' + '<div class="count-num">' + hours + '</div>' +
                    '</div>' +
                    '<div class="countdownlist-item">' +
                    '<div class="count-title">Minutes</div>' + '<div class="count-num">' + minutes + '</div>' +
                    '</div>' +
                    '<div class="countdownlist-item">' +
                    '<div class="count-title">Seconds</div>' + '<div class="count-num">' + seconds + '</div>' +
                    '</div>';

                // Output the result in an element with id="countDownBlock"
                if (item) {
                    item.innerHTML = countDownBlock;
                }
                // If the count down is over, write some text 
                if (distance < 0) {
                    clearInterval(countDown);
                    document.getElementById("countDownText").innerHTML = `<div class="text-center">
                <img src= ${success} alt="" height="120" />
                <div class="mt-5">
                    <h4>We've Launched our new website</h4>
                    <p class="text-muted">Click the below button to visit our website.</p>
                </div>
                <a href="/" class="btn btn-primary icon-link">Back to Home <i class="bi bi-arrow-right"></i></a>
            </div>`;
                }
            }, 1000);
        });
    },
};
</script>

<template>
<section class="auth-page-wrapper py-5 position-relative d-flex align-items-center justify-content-center min-vh-100">
    <b-container>
        <b-row class="justify-content-center">
            <b-col lg="11">
                <b-card no-body class="mb-0">
                    <b-row class="g-0 align-items-center">
                        <b-col xxl="5">
                            <b-card no-body class="auth-card bg-secondary h-100 border-0 shadow-none d-none d-sm-block mb-0">
                                <b-card-body class="py-5 d-flex justify-content-between flex-column h-100">
                                    <div class="text-center">
                                        <h3 class="text-white">Start your journey with us.</h3>
                                        <p class="text-white opacity-75 fs-base">It brings together your tasks,
                                            projects, timelines, files and more</p>
                                    </div>

                                    <div class="auth-effect-main my-5 position-relative rounded-circle d-flex align-items-center justify-content-center mx-auto">
                                        <div class="effect-circle-1 position-relative mx-auto rounded-circle d-flex align-items-center justify-content-center">
                                            <div class="effect-circle-2 position-relative mx-auto rounded-circle d-flex align-items-center justify-content-center">
                                                <div class="effect-circle-3 mx-auto rounded-circle position-relative text-white fs-4xl d-flex align-items-center justify-content-center">
                                                    Welcome to <span class="text-primary ms-1">Steex</span>
                                                </div>
                                            </div>
                                        </div>
                                        <ul class="auth-user-list list-unstyled">
                                            <li>
                                                <div class="avatar-sm d-inline-block">
                                                    <div class="avatar-title bg-white shadow-lg overflow-hidden rounded-circle">
                                                        <img :src="avatar1" alt="" class="img-fluid" />
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="avatar-sm d-inline-block">
                                                    <div class="avatar-title bg-white shadow-lg overflow-hidden rounded-circle">
                                                        <img :src="avatar2" alt="" class="img-fluid" />
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="avatar-sm d-inline-block">
                                                    <div class="avatar-title bg-white shadow-lg overflow-hidden rounded-circle">
                                                        <img :src="avatar3" alt="" class="img-fluid" />
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="avatar-sm d-inline-block">
                                                    <div class="avatar-title bg-white shadow-lg overflow-hidden rounded-circle">
                                                        <img :src="avatar4" alt="" class="img-fluid" />
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="avatar-sm d-inline-block">
                                                    <div class="avatar-title bg-white shadow-lg overflow-hidden rounded-circle">
                                                        <img :src="avatar5" alt="" class="img-fluid" />
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="text-center">
                                        <p class="text-white opacity-75 mb-0 mt-3">
                                            &copy;
                                            {{ new Date().getFullYear() }}Steex. Crafted with <i class="mdi mdi-heart text-danger"></i> by Themesbrand
                                        </p>
                                    </div>
                                </b-card-body>
                            </b-card>
                        </b-col>
                        <b-col xxl="6" class="mx-auto">
                            <b-card no-body class="mb-0 border-0 shadow-none mb-0">
                                <b-card-body class="p-sm-5 m-lg-4">
                                    <div id="countDownText">
                                        <div class="mb-sm-5 pb-sm-0 pb-5 text-center">
                                            <img :src="comingsoon" alt="" height="110" class="move-animation" />
                                        </div>
                                        <div class="mb-5 text-center">
                                            <h1>Coming Soon</h1>
                                        </div>
                                        <b-row class="justify-content-center mt-5">
                                            <b-col lg="10">
                                                <div data-countdown="Oct 30, 2023" class="countdownlist"></div>
                                            </b-col>
                                        </b-row>

                                        <div class="mt-5">
                                            <h4>Get notified when we launch</h4>
                                            <p class="text-muted">Don't worry we will not spam you 😊</p>
                                        </div>

                                        <form action="#!">
                                            <div class="countdown-input-subscribe mx-auto my-4">
                                                <input type="email" class="form-control" placeholder="Enter your email address" required />
                                                <b-button variant="primary" type="submit" id="button-email">Send<i class="ri-send-plane-2-fill align-bottom ms-2"></i></b-button>
                                            </div>
                                        </form>
                                    </div>
                                </b-card-body>
                            </b-card>
                        </b-col>
                    </b-row>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</section>
</template>
