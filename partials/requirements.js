// Check if we support html5 storage
function supports_html5_storage()
{
    return window.localStorage;
}

// Check if we support html5 fileAPI
function supports_html5_fileapi()
{
    return (window.File && window.FileReader && window.FileList && window.Blob);
}

function browser_fulfills_website_requirements()
{
    return supports_html5_storage() &&
           supports_html5_fileapi();
}
