<template>
  <nav class="flex items-center justify-between mb-6 -mx-3">
    <nuxt-link :to="{ name: 'index' }" class="text-indigo-500 mx-3">
      Liker
    </nuxt-link>

    <ul class="flex item-center">
      <li>
        <nuxt-link :to="{ name: 'index ' }" class="text-indigo-500 mx-3">
          Login
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{ name: 'index' }" class="text-indigo-500 mx-3">
          Register
        </nuxt-link>
      </li>

      <li>
        <nuxt-link :to="{ name: 'index' }" class="text-indigo-500 mx-3">
          Logout
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>
