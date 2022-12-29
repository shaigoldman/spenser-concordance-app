export interface OccurrenceI {
  location: string
  line_text: string
}

export interface EntryI {
  word: string
  total: number
  occurrences: OccurrenceI[]
  split_num: number
}

export interface metadata {
  page_size: number
  num_pages: number
}

export interface WordIndex {
  [key: string]: number
}

export interface Index {
  metadata: metadata
  words: WordIndex
  page_starts: number[]
}