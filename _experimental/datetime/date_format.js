function date_format (obj, format) {
	// http://kevin.vanzonneveld.net
    // +   original by: Brett Zamir (http://brettz9.blogspot.com)
    // -    depends on: date() (and an object passed in which was created by the DateTime class--e.g., date_create)
    // Note: finished but basically useless until date_create() is implemented
	return date(format, obj.getTimestamp());
}