initSidebarItems({"struct":[["ArchetypeData","Stores entity data in chunks. All entities within an archetype have the same data layout (component and tag types)."],["ArchetypeDescription","Describes the layout of an archetype, including what components and tags shall be attached to entities stored within an archetype."],["ArchetypeId","Unique ID of an archetype."],["ChunkId","Unique ID of a chunk."],["Chunkset","Contains chunks with the same layout and tag values."],["ComponentMeta","Stores metadata describing the type of a component."],["ComponentResourceSet","Provides raw access to component data slices."],["ComponentStorage","Stores a chunk of entities and their component data of a specific data layout."],["ComponentStorageLayout","Describes the data layout for a chunk."],["ComponentTypeId","A type ID identifying a component type."],["ComponentTypes","Stores slices of `ComponentTypeId`, each of which identifies the type of components contained within the archetype of the same index."],["ComponentWriter","Provides methods adding or removing components from a component vec."],["Components","A set of component slices located on a chunk."],["SliceVec","A vector of slices."],["Storage","Stores all entity data for a `World`."],["StorageWriter",""],["TagMeta","Stores metadata decribing the type of a tag."],["TagStorage","A vector of tag values of a single type."],["TagTypeId","A type ID identifying a tag type."],["TagTypes","Stores slices of `TagTypeId`, each of which identifies the type of tags contained within the archetype of the same index."],["Tags","Contains all of the tags attached to the entities in each chunk."]],"trait":[["Component","A `Component` is per-entity data that can be attached to a single entity."],["Tag","A `Tag` is shared data that can be attached to multiple entities at once."]]});