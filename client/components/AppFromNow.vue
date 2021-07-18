<template>
  <time :datetime="parsed">{{ fromNow }}</time>
</template>

<script>
import dayjs from 'dayjs';
const relativeTime = require('dayjs/plugin/relativeTime');

dayjs.extend(relativeTime);

export default {
  props: {
    timestamp: {
      require: true
    }
  },

  data() {
    return {
      parsed: null
    }
  },

  computed: {
    fromNow() {
      return this.parsed.fromNow();
    }
  },

  methods: {
    parse() {
      this.parsed = dayjs(this.timestamp)
    }
  },

  created() {
    this.parse();

    setInterval(() => {
      this.parse();
    }, 60000);
  }
}
</script>
