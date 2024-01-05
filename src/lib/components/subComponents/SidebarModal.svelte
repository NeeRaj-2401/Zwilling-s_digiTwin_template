<script>
    import { fly } from "svelte/transition";
    import hamburger from '$lib/assests/hamburger.svg'

    // Import images dynamically
    import ProcessMonitoring from '$lib/assests/sidebarImages/Process_Monitoring.svg';
    import ToolMonitoring from '$lib/assests/sidebarImages/Tool_Monitoring.svg';
    import HealthMonitoring from '$lib/assests/sidebarImages/Health_Monitoring.svg';
    import ChatterPrediction from '$lib/assests/sidebarImages/Chatter_Prediction.svg';
    import Calendar from '$lib/assests/sidebarImages/Calendar.svg';
    import Profile from '$lib/assests/sidebarImages/Profile.svg';
    import Login from '$lib/assests/sidebarImages/Login.svg';
    import Registration from '$lib/assests/sidebarImages/Registration.svg';
    import Replay from '$lib/assests/sidebarImages/Replay.svg';

    import ImportantImage from '$lib/assests/sidebarImages/Important.svg';
    import WarningImage from '$lib/assests/sidebarImages/Warning.svg';
    import InformationImage from '$lib/assests/sidebarImages/Information.svg';

    export let show = false;
    // let modal_show = false;

    let ai_tools = [
        {
            name: 'Process Monitoring',
            image: ProcessMonitoring
        },
        {
            name: 'Tool Monitoring',
            image: ToolMonitoring
        },
        {
            name: 'Health Monitoring',
            image: HealthMonitoring
        },
        {
            name: 'Chatter Prediction',
            image: ChatterPrediction
        },
        {
            name: 'Calendar',
            image: Calendar
        },
        {
            name: 'Profile',
            image: Profile
        },
        {
            name: 'Login',
            image: Login
        },
        {
            name: 'Registration',
            image: Registration
        },
        {
            name: 'Replay',
            image: Replay
        }
    ];

    let labels = [
        {
            name: 'Important',
            image: ImportantImage
        },
        {
            name: 'Warning',
            image: WarningImage
        },
        {
            name: 'Information',
            image: InformationImage
        }
    ];
</script>

{#if show}
    <nav transition:fly={{ x: -500, opacity: 5 }} class="fixed top-0 left-0 w-1/6 h-full p-8 bg-black border border-gray-700 rounded-tr-3xl rounded-br-3xl" >
        <div id="menu">
            <button on:click={() => ( show = false)}>
                <img src={hamburger} alt="" srcset="" />
            </button>
        </div>
        <div id="ai_tools" class="mt-4">
            <div class="bg-gradient-to-r from-black via-gray-300 to-black pb-0.5">
                <div class="bg-black font-normal text-3xl py-4">
                    <h1 class="text-3xl">AI TOOLS</h1>
                </div>
            </div>
            <div id="lists">
                {#each ai_tools as item}
                <div class="flex flex-row space-x-2 mt-4 ml-4">
                    <img src="{item.image}" alt="">
                    <h3 class="text-lg font-bold">{item.name}</h3>
                </div>
                {/each}
            </div>
        </div>

        <div id="labels" class="mt-4">
            <div class="bg-gradient-to-r from-black via-gray-300 to-black pb-0.5">
                <div class="bg-black font-normal text-3xl py-4">
                    <h1 class="text-3xl">LABELS</h1>
                </div>
            </div>
            <div id="lists">
                {#each labels as item}
                <div class="flex flex-row space-x-2 mt-4 ml-4">
                    <img src="{item.image}" alt="">
                    <h3 class="text-lg font-bold">{item.name}</h3>
                </div>
                {/each}
            </div>
        </div>
        <!-- <button on:click={() => {modal_show = true; show = false;}} class="text-white">About</button> -->
    </nav>
{/if}

