function getSeconds(value, type) {
    switch(type.toLowerCase()) {
        case "seconds":
            return value;

        case "minutes":
            return value * 60;

        case "hours":
            return value * 60 * 60;

        default:
            return -1;
    }
}