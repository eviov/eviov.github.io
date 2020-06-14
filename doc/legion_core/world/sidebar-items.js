initSidebarItems({"enum":[["EntityMutationError",""]],"struct":[["ComponentTupleFilter",""],["ComponentTupleSet","A `ComponentSource` which can insert tuples of components representing each entity into a world."],["HashMapCloneImplResult","Default implementation of `CloneImplResult` that uses a hash map. Keys are entities in the source world and values are entities in the destination world. (See comments on `CloneImplResult`)"],["HashMapEntityReplacePolicy","Default implementation of `EntityReplacePolicy` that uses a hash map. Keys are entities in the source world and values are entities in the destination world. (See comments on `EntityReplacePolicy`)"],["NoneCloneImplResult","Used to opt-out of receiving results from a `clone_from` or `clone_from_single` call (See comments on `CloneImplResult`)"],["NoneEntityReplacePolicy","Used to opt-out of replacing entities during a `clone_from` or `clone_from_single` call. (See comments on `EntityReplacePolicy`)"],["PreallocComponentSource",""],["Universe","The `Universe` is a factory for creating `World`s."],["UniverseId",""],["World","Contains queryable collections of data associated with `Entity`s."],["WorldId",""]],"trait":[["CloneImpl","Describes how to handle a `clone_from`. Allows the user to transform components from one type to another and provide their own implementation for cloning/transforming"],["CloneImplResult","Used along with `CloneImpl`, allows receiving results from a `clone_from` or `clone_from_single` call."],["ComponentLayout","Describes the types of a set of components attached to an entity."],["ComponentSource","A set of components to be attached to one or more entities."],["ComponentTypeTupleSet",""],["EntityReplacePolicy","Used along with `CloneImpl`, allows specifying that certain entities in the receiving world should be replaced with entities from the source world."],["EntityStore","A queryable collection of entities."],["IntoComponentSource","An object that can be converted into a `ComponentSource`."],["TagLayout","Describes the types of a set of tags attached to an entity."],["TagSet","A set of tag values to be attached to an entity."]]});