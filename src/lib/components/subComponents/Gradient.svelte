<div class="bg-gradient-to-r from-black via-gray-400 to-black py-0.5 text-white">
<div class="gradient py-0.5 text-white">
    <div class="justify-center items-center">
        <slot/>
    </div>
</div>
</div>

<style>
    .gradient{
        background: linear-gradient(90deg, #000F15 -1.57%, rgb(25, 39, 44) 56.63%, #000F15 111.02%);
    }
</style>