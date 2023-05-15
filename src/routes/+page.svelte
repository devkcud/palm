<script lang="ts">
  import type { FileEntry } from '@tauri-apps/api/fs';

  export let data: { folder: string, musics: FileEntry[] };
</script>

<p>Found at {data.folder}: {data.musics.length}</p>

<ol>
  {#each data.musics as music}
    <li style="margin: 1rem 3rem">{music.path.split('/').at(-1)}</li>
  {/each}
</ol>
