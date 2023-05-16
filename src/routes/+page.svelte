<script lang="ts">
  import type { FileEntry } from '@tauri-apps/api/fs';

  export let data: { musics: FileEntry[] };
</script>

<p>Found: {data.musics.length}</p>

<ol>
  {#each data.musics as music}
    <li style="margin: 1rem 3rem">{music.path.split('/').at(-1)}</li>
  {/each}
</ol>
