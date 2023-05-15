import { audioDir } from '@tauri-apps/api/path';
import { readDir, type FileEntry } from '@tauri-apps/api/fs';

export async function load({}) {
  const lookupDirectory: string = await audioDir();

  let musics: FileEntry[] = [];
  const entries: FileEntry[] = await readDir(lookupDirectory, { recursive: true });

  (function processEntries(entries: FileEntry[]) {
    for (const entry of entries)
      entry.children !== undefined ? processEntries(entry.children) : musics.push(entry);
  })(entries);

  return {
    folder: lookupDirectory,
    musics,
  };
}
