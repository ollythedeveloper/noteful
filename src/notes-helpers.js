export const findFolder = (folders = [], folderId) =>
    folders.find(folder => folder.id === folderId)

export const findNote = (notes = [], noteId) =>
    notes.find(note => note.id === noteId)

export const getNotesForFolder = (notes = [], folderId) => (
    (!folderId)
        ? notes
        : notes.filter(note => note.folderid === folderId)
)

export const countNotesForFolder = (notes = [], folderId) =>
    notes.filter(note => note.folderid === folderId).length

export const getNewId = () => {
    const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
    return (id)
}