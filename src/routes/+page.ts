import { readDir, type FileEntry, BaseDirectory } from '@tauri-apps/api/fs';

export async function load({}) {
  let musics: FileEntry[] = [];
  const entries: FileEntry[] = await readDir('', { dir: BaseDirectory.Audio, recursive: true });

  (function processEntries(entries: FileEntry[]) {
    for (const entry of entries)
      entry.children !== undefined ? processEntries(entry.children) : musics.push(entry);
  })(entries);

  return {
    musics,
  };
}
