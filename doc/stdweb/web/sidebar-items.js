initSidebarItems({"enum":[["CanvasStyle","Certain style functions can return multiple types"],["CloneKind","An enum which determines whenever the DOM Node's children will also be cloned or not."],["CompositeOperation","The type of compositing operation to apply when drawing new shapes"],["CrossOriginSetting","Represents CORS (Cross Origin Resource Sharing) setting for an HTML element."],["FileReaderReadyState","A number indicating the state of the `FileReader`."],["FileReaderResult","The result of a read operation performed with a FileReader."],["FillRule","The algorithm by which to determine if a point is inside a path or outside a path."],["FormDataEntry","Represents a type of data stores in FormData."],["GamepadMappingType","The set of known gamepad layout mappings."],["LineCap","How the end points of every line are drawn."],["LineJoin","determines how two connecting segments (of lines, arcs or curves) with non-zero lengths in a shape are joined together (degenerate segments with zero lengths, whose specified endpoints and control points are exactly at the same position, are skipped)."],["MutationRecord","Contains information about an individual change to the DOM."],["NodeType","Determines the type of a `Node`."],["Repetition","An enum indicating how to repeat the image."],["ShadowRootMode","The mode associated to a shadow root. Mainly used in IElement::attach_shadow and IShadowRoot::mode."],["SlotContentKind","An enum which determines whether SlotElement::assigned_nodes / SlotElement::assigned_elements will return the fallback content when nothing has been assigned to the slot."],["SocketBinaryType","The type of binary data being transmitted by the WebSocket connection."],["SocketReadyState","A number indicating the state of the `WebSocket`."],["TextAlign","Specifies text alignment"],["TextBaseline","Text baseline being used when drawing text"],["TouchType","An enumeration representing the different types of possible touch input."],["XhrReadyState","An enum indicating the state of the `XmlHttpRequest`."],["XhrResponseType","An enum describing the type of the response to `XmlHttpRequest`"]],"fn":[["alert","An alias for window.alert."],["confirm","An alias for window.confirm."],["document","A global instance of Document."],["set_timeout","An alias for window.set_timeout."],["window","A global instance of Window."]],"mod":[["error","A module containing error types."],["event","A module containing JavaScript DOM events."],["html_element","A module containing HTML DOM elements."]],"struct":[["ArrayBuffer","The `ArrayBuffer` object is used to represent a generic, fixed-length raw binary data buffer. You cannot directly manipulate the contents of an ArrayBuffer; instead, you create an TypedArray to do it."],["Blob","A reference to a JavaScript object which implements the IBlob interface."],["CanvasGradient","The CanvasGradient struct represents an opaque object describing a gradient. It is returned by the methods CanvasRenderingContext2D.createLinearGradient() or CanvasRenderingContext2D.createRadialGradient()."],["CanvasPattern","The CanvasPattern struct represents an opaque object describing a pattern, based on an image, a canvas or a video, created by the CanvasRenderingContext2D.createPattern() method. Intentionally blank, no non-experimental properties or methods."],["CanvasRenderingContext2d","Used for drawing rectangles, text, images and other objects onto the canvas element."],["Date","(JavaScript docs) https://www.ecma-international.org/ecma-262/6.0/#sec-date-constructor"],["Document","The `Document` interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree."],["DocumentFragment","A reference to a JavaScript object DocumentFragment."],["Element","A reference to a JavaScript object which implements the IElement interface."],["EventListenerHandle","A handle to a particular event listener."],["EventTarget","A reference to a JavaScript object which implements the IEventTarget interface."],["File","The File interface provides information about files and allows JavaScript in a web page to access their content."],["FileList","An object of this type is returned by the files property of the HTML `<input>` element; this lets you access the list of files selected with the `<input type=\"file\">` element. It's also used for a list of files dropped into web content when using the drag and drop API."],["FileReader","The FileReader object lets web applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer, using File or Blob objects to specify the file or data to read."],["FormData","The `FormData` interface provides a way to easily construct a set of key/value pairs representing form fields and their values, which can then be easily sent using the `XMLHttpRequest.send()` method. It uses the same format a form would use if the encoding type were set to `\"multipart/form-data\"`."],["Gamepad","An individual gamepad/controller."],["GamepadButton","The state of an individual button on a gamepad device."],["History","(JavaScript docs)"],["HtmlCollection","The `HtmlCollection` interface represents a generic collection (array-like object similar to arguments) of elements (in document order) and offers methods and properties for selecting from the list."],["HtmlElement","A reference to a JavaScript object which implements the IHtmlElement interface."],["ImageData","The ImageData struct represents the underlying pixel data of an area of a `<canvas>` element. You can create a new instance by calling `CanvasRenderingContext2d::create_image_data` or `CanvasRenderingContext2d::create_image_data_size_of`."],["Location","The `Location` interface represents the location (URL) of the object it is linked to. Changes done on it are reflected on the object it relates to. Both the Document and Window interface have such a linked `Location`, accessible via Document::location and Window::location respectively."],["MutationObserver","Provides a way to receive notifications about changes to the DOM."],["MutationObserverHandle","A wrapper which ensures that memory is properly cleaned up when it's no longer needed."],["MutationObserverInit","Specifies which changes should be observed for the target."],["Node","A reference to a JavaScript object which implements the INode interface."],["NodeList","`NodeList` objects are collections of nodes such as those returned by properties such as INode::child_nodes and the Document::query_selector_all method."],["Rect","Represents a rectangle. (JavaScript docs)"],["RequestAnimationFrameHandle","A handle to a pending animation frame request."],["Selection","Represents the range of text selected by the user or the current position of the caret. To obtain a Selection object for examination or modification, call Window.get_selection()."],["ShadowRoot","The `ShadowRoot` interface of the Shadow DOM API is the root node of a DOM subtree that is rendered separately from a document's main DOM tree."],["SocketCloseCode","Wrapper type around a CloseEvent code, indicating why the WebSocket was closed"],["Storage","The `Storage` interface of the Web Storage API provides access to the session storage or local storage for a particular domain."],["StringMap","Used by the `dataset` HTML attribute to represent data for custom attributes added to elements."],["TextMetrics","The TextMetrics struct represents the dimension of a text in the canvas, as created by the CanvasRenderingContext2D.measureText() method."],["TextNode","The `TextNode` represents the textual content of an IElement"],["TimeoutHandle","A reference to a timeout object created by set_clearable_timeout"],["TokenList","The `TokenList` represents a set of space-separated tokens."],["Touch","The Touch interface represents a single contact point on a touch-sensitive device. The contact point is commonly a finger or stylus and the device may be a touchscreen or trackpad."],["TypedArray","JavaScript typed arrays are array-like objects and provide a mechanism for accessing raw binary data."],["WebSocket","The WebSocket object provides the API for creating and managing a WebSocket connection to a server, as well as for sending and receiving data on the connection."],["Window","The `Window` object represents a window containing a DOM document."],["XmlHttpRequest","Use XmlHttpRequest (XHR) objects to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing. XmlHttpRequest is used heavily in Ajax programming."]],"trait":[["IBlob","A blob object represents a file-like object of immutable, raw data. Blobs represent data that isn't necessarily in a JavaScript-native format."],["IChildNode","The `ChildNode` interface contains methods that are particular to `Node` objects that can have a parent."],["IElement","The `IElement` interface represents an object of a Document. This interface describes methods and properties common to all kinds of elements."],["IEventTarget","`IEventTarget` is an interface implemented by objects that can receive events and may have listeners for them."],["IHtmlElement","The `IHtmlElement` interface represents any HTML element."],["INode","`INode` is an interface from which a number of DOM API object types inherit."],["INonElementParentNode","The `INonElementParentNode` mixin contains methods and properties that are common to `Document` and `DocumentFragment`."],["IParentNode","The `ParentNode` mixin contains methods and properties that are common to all types of `Node` objects that can have children."],["ISlotable","The Slotable mixin defines features that allow nodes to become the contents of a `<slot>` element — the following features are included in both Element and Text."],["IWindowOrWorker","The `IWindowOrWorker` mixin describes several features common to the `Window` and the global scope of web workers."],["RenderingContext","Trait implemented by rendering contexts which can be obtained from a canvas."]]});