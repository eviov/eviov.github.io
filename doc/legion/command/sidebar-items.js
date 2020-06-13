initSidebarItems({"struct":[["CommandBuffer","A command buffer used to queue mutable changes to the world from a system. This buffer is automatically flushed and refreshed at the beginning of every frame by `Schedule`. If `Schedule` is not used, then the user needs to manually flush it by performing `CommandBuffer::write`."],["EntityBuilder","A builder type which can be retrieved from the command buffer. This is the ideal use case for inserted complex entities with multiple components and tags from a command buffer. Although `add_component` will perform a new move operation on every addition, this allows the construction of a single `insert` command for an entity, but without using the actual `insert` command provided by the `CommandBuffer`"]],"trait":[["WorldWritable","This trait can be used to implement custom world writer types that can be directly inserted into the command buffer, for more custom and complex world operations. This is analogous to the `CommandBuffer::exec_mut` function type, but does not perform explicit any/any archetype access."]]});