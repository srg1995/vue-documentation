<script lang="js" setup>
const date = new Date()
const year = date.getFullYear()
</script>

<template>
  <footer className="h-[10vh] bg-gray-800 text-white p-4 text-center  bottom-0 w-full">
    <div className="container mx-auto">
      <p className="text-lg font-semibold">{{ year }} - {{ $t('message.FOOTER_TEXT1') }}</p>
      <p className="text-sm mt-2">{{ $t('message.FOOTER_TEXT2') }}</p>
      <div className="mt-4">
        <a
          href="https://www.linkedin.com/in/sergio-sacrist%C3%A1n-santero-31b750a5/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline mx-2"
        >
          {{ $t('message.LINK_LINKEDIN') }}
        </a>
        <a
          href="https://github.com/srg1995"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline mx-2"
        >
          {{ $t('message.LINK_GITHUB') }}
        </a>
      </div>
    </div>
  </footer>
</template>
