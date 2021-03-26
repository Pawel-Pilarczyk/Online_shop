<template>
    <div id="about-us">
        <h1>Sofofo</h1>
        <h2>Our Main Goal is to get the best Sofa expierience for you!</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis efficitur diam, eu dictum eros. Mauris eleifend purus maximus dolor commodo, sit amet placerat libero bibendum. Donec quis porta dolor, vel porta elit. Fusce eget nisi vitae tellus commodo condimentum. Mauris malesuada, mauris id blandit maximus, nunc ipsum congue ex, quis blandit diam risus et odio. Duis at est pharetra, iaculis lacus nec, ullamcorper eros</p>

        <img alt="">


        <section id="timeline">

            <div v-for="event in timelineItemsData" :key='timelineItemsData.indexOf(event)' class='timelineItem'>
                <h3>{{event.date}}</h3>
                <p>{{ event.event }}</p>
            </div>

        </section>


        <h1>Our Team</h1>

        <div id="ourTeam">

            <div class='employee' id="employee1">
                <img>
                <span>
                    <h3>Adam Sofa</h3>
                    <h4>Sofofo CEO</h4>
                </span>
            </div>

            <div class='employee' id="employee2">
                <img>
                <span>
                    <h3>Eve Sofa</h3>
                    <h4>Senior Sofa Specialist</h4>
                </span>
            </div>

            <div class='employee' id="employee3">
                <img>
                <span>
                    <h3>Chad Chair</h3>
                    <h4>Junior Sofa Specialist</h4>
                </span>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name:'AboutUs',
        data() {
            return {
                timelineItemsData:[
                    {
                        date:'12-01-1998',
                        event:'Adam Sofa starts his first shop in NY called Sofofo',
                    },
                    {
                        date:'17-01-1998',
                        event:'First happy customer buys Sofofo favourite XtremeSOfa 3000',
                    },
                    {
                        date:'01-01-2000',
                        event:'Sofofo opens second shop in NY',
                    },
                    {
                        date:'12-05-2005',
                        event:'Sofofo sells is 10000th sofa!!',
                    },
                    {
                        date:'12-05-2008',
                        event:'Sofofo called the the best sofa franchise in USA',
                    },


                ],
            }
        },
    }
</script>