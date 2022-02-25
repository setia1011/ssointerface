function PDFViewerProInstance(_0xd5cex2, _0xd5cex3, _0xd5cex4, _0xd5cex5, _0xd5cex6, _0xd5cex7, _0xd5cex8, _0xd5cex9, _0xd5cexa, _0xd5cexb, _0xd5cexc) {
    this._MODE = _0xd5cex5, this._DOM_ELEMENT = 'TEXT' == this._MODE ? document.body.appendChild(document.createElement('div')) : _0xd5cex3, this._TEXT_DOM_ELEMENT = 'TEXT' == this._MODE ? _0xd5cex3 : null, this._INSTANCE_ID = PDFViewerPro.instances.length, this._FULL_SCREEN = 0, this._PDF_URL = _0xd5cex2, this._PROTECTION_KEY = _0xd5cex6, this._SHOW_DOWNLOAD_BUTTON = _0xd5cex7, this._COLOR = _0xd5cex4, this._PDF_DOC, this._CURRENT_PAGE, this._TOTAL_PAGES, this._PAGE_RENDERING_IN_PROGRESS = 0, this._CANVAS, this._CANVAS_CTX;
    var _0xd5cexd = window.getComputedStyle(this._DOM_ELEMENT, null);
    this._VIEWER_WIDTH = _0xd5cex3.clientWidth - (parseInt(_0xd5cexd.getPropertyValue('border-left-width'), 10) + parseInt(_0xd5cexd.getPropertyValue('border-right-width'), 10) + parseInt(_0xd5cexd.getPropertyValue('padding-left'), 10) + parseInt(_0xd5cexd.getPropertyValue('padding-right'), 10)), this._PDF_WIDTH = -1, this._PDF_HEIGHT = -1, this._INLINE_MODE_INITIALIZING = 'NORMAL' != _0xd5cex5 ? 1 : 0, this._PDF_META_CONTAINER_HEIGHT = 50, this._VIEWER_MODAL_WIDTH = -1, this._CANVAS_WIDTH = -1, this._ENABLE_ANALYTICS = _0xd5cex8, this._PDF_PAGE_VIEWED_TIMEOUT_VAR = null, this._PDF_PAGE_VIEWED_TIMEOUT_SECONDS = _0xd5cex9, this._PDF_IMPRESSION_ANALYTICS_CALLBACK = _0xd5cexa, this._PDF_FULLY_VIEWED_ANALYTICS_CALLBACK = _0xd5cexb, this._GOOGLE_ANALYTICS_TRACKING_ID = _0xd5cexc, this._PDF_PAGES_VIEWED = [], this._PDF_IMPRESSION_DATA_SENT = 0, this._PDF_FULLY_VIEWED_DATA_SENT = 0, this.addHTML(), this.addEvents(), this.showPDF()
}

function sendImpressionData(_0xd5cex2) {
    alert('PDF impression logged for ' + _0xd5cex2)
}

function sendFullyViewedData(_0xd5cex2) {
    alert(_0xd5cex2 + ' has been fully viewed')
}
var PDFViewerPro = {
    instances: [],
    next_page_svg: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 31.49 31.49" style="enable-background:new 0 0 31.49 31.49;" xml:space="preserve"><path d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"/></svg>',
    prev_page_svg: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 31.494 31.494" style="enable-background:new 0 0 31.494 31.494;" xml:space="preserve"><path d="M10.273,5.009c0.444-0.444,1.143-0.444,1.587,0c0.429,0.429,0.429,1.143,0,1.571l-8.047,8.047h26.554c0.619,0,1.127,0.492,1.127,1.111c0,0.619-0.508,1.127-1.127,1.127H3.813l8.047,8.032c0.429,0.444,0.429,1.159,0,1.587c-0.444,0.444-1.143,0.444-1.587,0l-9.952-9.952c-0.429-0.429-0.429-1.143,0-1.571L10.273,5.009z"/></svg>',
    full_screen_svg: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 215.35 215.35" style="enable-background:new 0 0 215.35 215.35;" xml:space="preserve"><g><path d="M7.5,65.088c4.143,0,7.5-3.358,7.5-7.5V25.61l48.305,48.295c1.465,1.464,3.384,2.196,5.303,2.196c1.92,0,3.84-0.732,5.304-2.197c2.929-2.929,2.929-7.678-0.001-10.606L25.604,15.002h31.985c4.142,0,7.5-3.358,7.5-7.5c0-4.142-3.357-7.5-7.5-7.5H7.5c-4.143,0-7.5,3.358-7.5,7.5v50.087C0,61.73,3.357,65.088,7.5,65.088z"/>	<path d="M207.85,150.262c-4.143,0-7.5,3.358-7.5,7.5v31.979l-49.792-49.792c-2.93-2.929-7.678-2.929-10.607,0c-2.929,2.929-2.929,7.678,0,10.606l49.791,49.791h-31.977c-4.143,0-7.5,3.358-7.5,7.5c0,4.142,3.357,7.5,7.5,7.5h50.086c4.143,0,7.5-3.358,7.5-7.5v-50.084C215.35,153.62,211.992,150.262,207.85,150.262z"/><path d="M64.792,139.949L15.005,189.74v-31.978c0-4.142-3.357-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v50.086c0,4.142,3.357,7.5,7.5,7.5h50.084c4.142,0,7.5-3.358,7.5-7.5s-3.357-7.5-7.5-7.5H25.611l49.788-49.793c2.929-2.929,2.929-7.678-0.001-10.607C72.471,137.02,67.722,137.02,64.792,139.949z"/><path d="M207.85,0.002h-50.086c-4.143,0-7.5,3.358-7.5,7.5c0,4.142,3.357,7.5,7.5,7.5h31.979l-48.298,48.301c-2.929,2.929-2.929,7.678,0.001,10.607c1.464,1.464,3.384,2.196,5.303,2.196c1.919,0,3.839-0.733,5.304-2.197l48.298-48.301v31.98c0,4.142,3.357,7.5,7.5,7.5c4.143,0,7.5-3.358,7.5-7.5V7.502C215.35,3.359,211.992,0.002,207.85,0.002z"/></g></svg>',
    normal_screen_svg: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="357px" height="357px" viewBox="0 0 357 357" style="enable-background:new 0 0 357 357;" xml:space="preserve"><g><path d="M0,280.5h76.5V357h51V229.5H0V280.5z M76.5,76.5H0v51h127.5V0h-51V76.5z M229.5,357h51v-76.5H357v-51H229.5V357z M280.5,76.5V0h-51v127.5H357v-51H280.5z"/></g></svg>',
    download_svg: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129"><g><path d="m61.5,107.1c0.4,0.4 0.9,0.7 1.4,0.9 0,0 0,0 0.1,0 0.5,0.2 1,0.3 1.6,0.3s1.1-0.1 1.6-0.3c0,0 0,0 0.1,0 0.5-0.2 1-0.5 1.4-0.9l56.9-56.9c1.7-1.7 1.7-4.4 0-6.1-1.7-1.7-4.4-1.7-6.1,0l-49.7,49.5v-82.8c0-2.4-1.9-4.3-4.3-4.3-2.4,0-4.3,1.9-4.3,4.3v82.9l-49.5-49.6c-1.7-1.7-4.4-1.7-6.1,0-1.7,1.7-1.7,4.4 0,6.1l56.9,56.9z"/><path d="m7.6,122.6h113.8c2.4,0 4.3-1.9 4.3-4.3 0-2.4-1.9-4.3-4.3-4.3h-113.8c-2.4,0-4.3,1.9-4.3,4.3 0,2.3 1.9,4.3 4.3,4.3z"/></g></svg>',
    cancel_svg: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></svg>',
    resize_timeout: null,
    full_screen_element_handled: 0,
    init: function () {
        document.addEventListener('mozfullscreenchange', function () {
            this.screenChange()
        } ['bind'](this)), document.addEventListener('webkitfullscreenchange', function (_0xd5cex2) {
            this.screenChange()
        } ['bind'](this)), document.addEventListener('MSFullscreenChange', function (_0xd5cex2) {
            this.screenChange()
        } ['bind'](this)), document.addEventListener('fullscreenchange', function (_0xd5cex2) {
            this.screenChange()
        } ['bind'](this)), window.addEventListener('resize', function (_0xd5cex2) {
            null === this.getFullScreenElement() && null === this.resize_timeout && 0 != this.instances.length && (this.resize_timeout = setTimeout(function () {
                if (this.resize_timeout = null, 1 != this.full_screen_element_handled) {
                    for (var _0xd5cex2 = 0; _0xd5cex2 < this.instances.length; _0xd5cex2++) {
                        0 == this.instances[_0xd5cex2]._PAGE_RENDERING_IN_PROGRESS && ('NORMAL' == this.instances[_0xd5cex2]._MODE ? (this.instances[_0xd5cex2]._CANVAS_WIDTH = this.instances[_0xd5cex2]._DOM_ELEMENT.querySelector('.pdf-pro-canvas-container').getBoundingClientRect().width - 2, this.instances[_0xd5cex2]._CANVAS.setAttribute('width', this.instances[_0xd5cex2]._CANVAS_WIDTH)) : (this.instances[_0xd5cex2]._VIEWER_MODAL_WIDTH = this.instances[_0xd5cex2].getModalWidth(), this.instances[_0xd5cex2]._DOM_ELEMENT.querySelector('.pdf-pro-main-container').style.width = this.instances[_0xd5cex2]._VIEWER_MODAL_WIDTH + 'px', this.instances[_0xd5cex2]._CANVAS.setAttribute('width', this.instances[_0xd5cex2]._VIEWER_MODAL_WIDTH - 2)), this.instances[_0xd5cex2].showPage(this.instances[_0xd5cex2]._CURRENT_PAGE))
                    }
                } else {
                    this.full_screen_element_handled = 0
                }
            } ['bind'](this), 100))
        } ['bind'](this));
        for (var _0xd5cex2 = document.querySelectorAll('.pdf-pro-plugin'), _0xd5cex3 = 0; _0xd5cex3 < _0xd5cex2.length; _0xd5cex3++) {
            this.addInstance(_0xd5cex2[_0xd5cex3])
        }
    },
    getFullScreenElement: function () {
        return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || null
    },
    screenChange: function () {
        var _0xd5cex2 = this.getFullScreenElement(),
            _0xd5cex3 = null;
        if (null !== _0xd5cex2) {
            null !== (_0xd5cex3 = _0xd5cex2.getAttribute('data-instance-id')) && (this.instances[_0xd5cex3]._DOM_ELEMENT.querySelector('.pdf-pro-canvas-container').focus(), this.instances[_0xd5cex3]._DOM_ELEMENT.querySelector('.pdf-pro-main-container').style.width = '100%', this.instances[_0xd5cex3]._CANVAS.setAttribute('width', parseInt(0.98 * screen.width, 10) - 2), this.instances[_0xd5cex3].showPage(this.instances[_0xd5cex3]._CURRENT_PAGE), this.instances[_0xd5cex3]._FULL_SCREEN = 1, this.instances[_0xd5cex3]._DOM_ELEMENT.querySelector('.pdf-pro-full-screen').style.display = 'none', this.instances[_0xd5cex3]._DOM_ELEMENT.querySelector('.pdf-pro-close').style.display = 'inline-block')
        } else {
            for (var _0xd5cex4 = 0; _0xd5cex4 < this.instances.length; _0xd5cex4++) {
                if (1 == this.instances[_0xd5cex4]._FULL_SCREEN) {
                    _0xd5cex3 = _0xd5cex4;
                    break
                }
            };
            null !== _0xd5cex3 && ('NORMAL' != this.instances[_0xd5cex3]._MODE ? (this.instances[_0xd5cex3]._DOM_ELEMENT.querySelector('.pdf-pro-main-container').focus(), this.instances[_0xd5cex3]._DOM_ELEMENT.querySelector('.pdf-pro-main-container').style.width = this.instances[_0xd5cex3]._VIEWER_MODAL_WIDTH + 'px', this.instances[_0xd5cex3]._CANVAS.setAttribute('width', this.instances[_0xd5cex3]._VIEWER_MODAL_WIDTH - 2), this.instances[_0xd5cex3]._DOM_ELEMENT.querySelector('.pdf-pro-close').style.display = 'inline-block') : (this.instances[_0xd5cex3]._DOM_ELEMENT.querySelector('.pdf-pro-canvas-container').blur(), this.instances[_0xd5cex3]._CANVAS.setAttribute('width', this.instances[_0xd5cex3]._CANVAS_WIDTH), this.instances[_0xd5cex3]._DOM_ELEMENT.querySelector('.pdf-pro-close').style.display = 'none'), this.instances[_0xd5cex3].showPage(this.instances[_0xd5cex3]._CURRENT_PAGE), this.instances[_0xd5cex3]._DOM_ELEMENT.querySelector('.pdf-pro-container').style.width = 'auto', this.instances[_0xd5cex3]._FULL_SCREEN = 0, this.instances[_0xd5cex3]._DOM_ELEMENT.querySelector('.pdf-pro-full-screen').style.display = 'inline-block', PDFViewerPro.full_screen_element_handled = 1)
        }
    },
    addInstance: function (_0xd5cex2) {
        this.instances.push(new PDFViewerProInstance(_0xd5cex2.getAttribute('data-pdf-url'), _0xd5cex2, null === _0xd5cex2.getAttribute('data-color') ? '#666666' : _0xd5cex2.getAttribute('data-color'), null === _0xd5cex2.getAttribute('data-mode') ? 'NORMAL' : _0xd5cex2.getAttribute('data-mode').toUpperCase(), _0xd5cex2.getAttribute('data-protection-key'), null === _0xd5cex2.getAttribute('data-show-download-button') ? 1 : _0xd5cex2.getAttribute('data-show-download-button'), null === _0xd5cex2.getAttribute('data-enable-analytics') ? '0' : _0xd5cex2.getAttribute('data-enable-analytics'), null === _0xd5cex2.getAttribute('data-page-view-seconds') ? 1 : _0xd5cex2.getAttribute('data-page-view-seconds'), null === _0xd5cex2.getAttribute('data-impression-analytics-callback') ? null : _0xd5cex2.getAttribute('data-impression-analytics-callback'), null === _0xd5cex2.getAttribute('data-fully-viewed-analytics-callback') ? null : _0xd5cex2.getAttribute('data-fully-viewed-analytics-callback'), null === _0xd5cex2.getAttribute('data-google-analytics-tracking-id') ? null : _0xd5cex2.getAttribute('data-google-analytics-tracking-id')))
    },
    decodeKey: function (_0xd5cex2) {
        var _0xd5cex3 = _0xd5cex2.slice(4, -4),
            _0xd5cex4 = _0xd5cex3.substr(3, 3),
            _0xd5cex5 = _0xd5cex3.replace(_0xd5cex4, '');
        return inverted = _0xd5cex5.split('').reverse().join(''), final_key = atob(inverted), final_key
    }
};
PDFViewerProInstance.prototype = {
    addHTML: function () {
        var _0xd5cex2 = '<div class="pdf-pro-main-container pdf-pro-main-container-' + this._INSTANCE_ID + '" tabindex="0"><div class="pdf-pro-container"><div class="pdf-pro-loader"><div class="pdf-pro-loading-bar"><div class="pdf-pro-loading-completed" style="background-color:' + this._COLOR + '"></div></div></div><div class="pdf-pro-contents"><div class="pdf-pro-meta" style="border-top-color:' + this._COLOR + '"><div class="pdf-pro-meta-border"><div class="pdf-pro-buttons-1"><span class="pdf-pro-prev pdf-pro-button" title="Previous Page">' + PDFViewerPro.prev_page_svg + '</span><span class="pdf-pro-next pdf-pro-button" title="Next Page">' + PDFViewerPro.next_page_svg + '</span></div><div class="pdf-pro-page-count-container"><div class="pdf-pro-current-page" style="color:' + this._COLOR + '"></div><div class="pdf-pro-page-divider">of</div><div class="pdf-pro-total-pages" style="color:' + this._COLOR + '"></div></div><div class="pdf-pro-buttons-2">' + (1 == this._SHOW_DOWNLOAD_BUTTON ? '<a class="pdf-pro-download pdf-pro-button" title="Download" download target="_blank" href="' + this._PDF_URL + '">' + PDFViewerPro.download_svg + '</a>' : '') + '<span class="pdf-pro-full-screen pdf-pro-button" title="View in Full Screen" style="color:' + this._COLOR + '">' + PDFViewerPro.full_screen_svg + '</span><span class="pdf-pro-close pdf-pro-button" title="Close">' + PDFViewerPro.cancel_svg + '</span></div></div></div><div class="pdf-pro-canvas-container" tabindex="0"><canvas class="pdf-pro-canvas"></canvas></div></div></div></div>';
        'NORMAL' != this._MODE && (_0xd5cex2 = ('IMAGE' == this._MODE ? '<div class="pdf-pro-image-mode"></div>' : '') + '<div style="display:none" class="pdf-pro-modal pdf-pro-modal-' + this._INSTANCE_ID + '">' + _0xd5cex2 + '</div>'), this._DOM_ELEMENT.insertAdjacentHTML('beforeend', _0xd5cex2), this._CANVAS = this._DOM_ELEMENT.querySelector('.pdf-pro-canvas'), this._CANVAS_CTX = this._CANVAS.getContext('2d'), this._DOM_ELEMENT.querySelector('.pdf-pro-main-container').setAttribute('data-instance-id', this._INSTANCE_ID);
        var _0xd5cex3 = document.createElement('style');
        document.head.appendChild(_0xd5cex3), _0xd5cex3.sheet.insertRule('.pdf-pro-main-container-' + this._INSTANCE_ID + ' svg polygon, .pdf-pro-main-container-' + this._INSTANCE_ID + ' svg path { fill: ' + this._COLOR + '; }', 0), 'NORMAL' != this._MODE && (this._DOM_ELEMENT.querySelector('.pdf-pro-close').style.display = 'inline-block', 'IMAGE' == this._MODE ? this._DOM_ELEMENT.querySelector('.pdf-pro-image-mode').addEventListener('click', function () {
            1 == this._ENABLE_ANALYTICS && 0 == this._PDF_IMPRESSION_DATA_SENT && this.sendPdfImpressionAnalyticsData(), this._DOM_ELEMENT.querySelector('.pdf-pro-modal').style.display = 'block', this._DOM_ELEMENT.querySelector('.pdf-pro-main-container').focus()
        } ['bind'](this)) : 'TEXT' == this._MODE && this._TEXT_DOM_ELEMENT.addEventListener('click', function (_0xd5cex2) {
            1 == this._ENABLE_ANALYTICS && 0 == this._PDF_IMPRESSION_DATA_SENT && this.sendPdfImpressionAnalyticsData(), this._DOM_ELEMENT.querySelector('.pdf-pro-modal').style.display = 'block', this._DOM_ELEMENT.querySelector('.pdf-pro-main-container').focus(), _0xd5cex2.preventDefault()
        } ['bind'](this)), this._DOM_ELEMENT.querySelector('.pdf-pro-modal').addEventListener('click', function () {
            this.style.display = 'none'
        }))
    },
    addEvents: function () {
        this._DOM_ELEMENT.querySelector('.pdf-pro-prev').addEventListener('click', function (_0xd5cex2) {
            1 == this._ENABLE_ANALYTICS && null !== this._PDF_PAGE_VIEWED_TIMEOUT_VAR && (clearTimeout(this._PDF_PAGE_VIEWED_TIMEOUT_VAR), this._PDF_PAGE_VIEWED_TIMEOUT_VAR = null), 1 != this._CURRENT_PAGE && 0 == this._PAGE_RENDERING_IN_PROGRESS && this.showPage(--this._CURRENT_PAGE), _0xd5cex2.stopPropagation()
        } ['bind'](this)), this._DOM_ELEMENT.querySelector('.pdf-pro-next').addEventListener('click', function (_0xd5cex2) {
            1 == this._ENABLE_ANALYTICS && 0 == this._PDF_IMPRESSION_DATA_SENT && this.sendPdfImpressionAnalyticsData(), 1 == this._ENABLE_ANALYTICS && null !== this._PDF_PAGE_VIEWED_TIMEOUT_VAR && (clearTimeout(this._PDF_PAGE_VIEWED_TIMEOUT_VAR), this._PDF_PAGE_VIEWED_TIMEOUT_VAR = null), this._CURRENT_PAGE != this._TOTAL_PAGES && 0 == this._PAGE_RENDERING_IN_PROGRESS && this.showPage(++this._CURRENT_PAGE), _0xd5cex2.stopPropagation()
        } ['bind'](this)), this._DOM_ELEMENT.querySelector('.pdf-pro-full-screen').addEventListener('click', function (_0xd5cex2) {
            0 == this._PAGE_RENDERING_IN_PROGRESS && (0 == this._FULL_SCREEN ? (1 == this._ENABLE_ANALYTICS && 0 == this._PDF_IMPRESSION_DATA_SENT && this.sendPdfImpressionAnalyticsData(), this.goInFullscreen()) : this.goOutFullscreen()), _0xd5cex2.stopPropagation()
        } ['bind'](this)), 1 == this._SHOW_DOWNLOAD_BUTTON && this._DOM_ELEMENT.querySelector('.pdf-pro-download').addEventListener('click', function (_0xd5cex2) {
            1 == this._ENABLE_ANALYTICS && 0 == this._PDF_IMPRESSION_DATA_SENT && this.sendPdfImpressionAnalyticsData(), _0xd5cex2.stopPropagation()
        } ['bind'](this)), this._DOM_ELEMENT.querySelector('.pdf-pro-close').addEventListener('click', function (_0xd5cex2) {
            1 == this._FULL_SCREEN ? 0 == this._PAGE_RENDERING_IN_PROGRESS && this.goOutFullscreen() : this._DOM_ELEMENT.querySelector('.pdf-pro-modal').style.display = 'none', _0xd5cex2.stopPropagation()
        } ['bind'](this)), this._DOM_ELEMENT.querySelector('.pdf-pro-main-container').addEventListener('click', function (_0xd5cex2) {
            _0xd5cex2.stopPropagation()
        } ['bind'](this)), this._DOM_ELEMENT.querySelector('.pdf-pro-main-container').addEventListener('keydown', function (_0xd5cex2) {
            switch (_0xd5cex2.keyCode) {
            case 37:
                this._DOM_ELEMENT.querySelector('.pdf-pro-prev').click();
                break;
            case 38:
                0 == this._FULL_SCREEN && this._DOM_ELEMENT.querySelector('.pdf-pro-prev').click();
                break;
            case 39:
                this._DOM_ELEMENT.querySelector('.pdf-pro-next').click();
                break;
            case 40:
                0 == this._FULL_SCREEN && this._DOM_ELEMENT.querySelector('.pdf-pro-next').click()
            };
            _0xd5cex2.stopPropagation(), _0xd5cex2.preventDefault()
        } ['bind'](this)), this._DOM_ELEMENT.querySelector('.pdf-pro-canvas-container').addEventListener('keydown', function (_0xd5cex2) {
            switch (_0xd5cex2.keyCode) {
            case 37:
                this._DOM_ELEMENT.querySelector('.pdf-pro-prev').click();
                break;
            case 38:
                0 == this._FULL_SCREEN && this._DOM_ELEMENT.querySelector('.pdf-pro-prev').click();
                break;
            case 39:
                this._DOM_ELEMENT.querySelector('.pdf-pro-next').click();
                break;
            case 40:
                0 == this._FULL_SCREEN && this._DOM_ELEMENT.querySelector('.pdf-pro-next').click()
            };
            _0xd5cex2.stopPropagation(), 0 == this._FULL_SCREEN && _0xd5cex2.preventDefault()
        } ['bind'](this))
    },
    showPDF: function () {
        this._DOM_ELEMENT.querySelector('.pdf-pro-loader').style.display = 'block';
        var _0xd5cex2 = {
            url: this._PDF_URL
        };
        null !== this._PROTECTION_KEY && (_0xd5cex2.password = PDFViewerPro.decodeKey(this._PROTECTION_KEY)), PDFJS.getDocument(_0xd5cex2, !1, null, function (_0xd5cex2) {
            var _0xd5cex3 = _0xd5cex2.loaded / _0xd5cex2.total * 100;
            this._DOM_ELEMENT.querySelector('.pdf-pro-loading-completed').style.width = _0xd5cex3 + '%'
        } ['bind'](this)).then(function (_0xd5cex2) {
            if (this._PDF_DOC = _0xd5cex2, this._TOTAL_PAGES = this._PDF_DOC.numPages, 1 == this._ENABLE_ANALYTICS) {
                this._PDF_PAGES_VIEWED.push(1);
                for (var _0xd5cex3 = 1; _0xd5cex3 < this._TOTAL_PAGES; _0xd5cex3++) {
                    this._PDF_PAGES_VIEWED.push(0)
                }
            };
            this._DOM_ELEMENT.querySelector('.pdf-pro-loader').style.display = 'none', this._DOM_ELEMENT.querySelector('.pdf-pro-contents').style.display = 'block', this._DOM_ELEMENT.querySelector('.pdf-pro-total-pages').textContent = this._TOTAL_PAGES, this.showPage(1)
        } ['bind'](this)).catch(function (_0xd5cex2) {
            console.log(_0xd5cex2.message), this._DOM_ELEMENT.innerHTML = _0xd5cex2.message
        } ['bind'](this))
    },
    sendPdfImpressionAnalyticsData: function () {
        this._PDF_IMPRESSION_DATA_SENT = 1, null !== this._PDF_IMPRESSION_ANALYTICS_CALLBACK && window[this._PDF_IMPRESSION_ANALYTICS_CALLBACK]('PDF-' + (this._INSTANCE_ID + 1)), null !== this._GOOGLE_ANALYTICS_TRACKING_ID && null !== ga && (ga('create', this._GOOGLE_ANALYTICS_TRACKING_ID, 'auto', 'PDFViewer'), ga('PDFViewer.send', 'event', 'PDF', 'Impression', this._PDF_URL))
    },
    sendPdfFullyViewedAnalyticsData: function () {
        this._PDF_FULLY_VIEWED_DATA_SENT = 1, null !== this._PDF_FULLY_VIEWED_ANALYTICS_CALLBACK && window[this._PDF_FULLY_VIEWED_ANALYTICS_CALLBACK]('PDF-' + (this._INSTANCE_ID + 1)), null !== this._GOOGLE_ANALYTICS_TRACKING_ID && null !== ga && ga('PDFViewer.send', 'event', 'PDF', 'Fully-Viewed', this._PDF_URL)
    },
    calculatePageViewedAnalytics: function () {
        0 == this._PDF_PAGES_VIEWED[this._CURRENT_PAGE - 1] && (this._PDF_PAGE_VIEWED_TIMEOUT_VAR = setTimeout(function () {
            if (this._PDF_PAGES_VIEWED[this._CURRENT_PAGE - 1] = 1, this._PDF_PAGE_VIEWED_TIMEOUT_VAR = null, 0 == this._PDF_FULLY_VIEWED_DATA_SENT) {
                for (var _0xd5cex2 = 1, _0xd5cex3 = 0; _0xd5cex3 < this._PDF_PAGES_VIEWED.length; _0xd5cex3++) {
                    if (0 == this._PDF_PAGES_VIEWED[_0xd5cex3]) {
                        _0xd5cex2 = 0;
                        break
                    }
                };
                1 == _0xd5cex2 && this.sendPdfFullyViewedAnalyticsData()
            }
        } ['bind'](this), 1e3 * this._PDF_PAGE_VIEWED_TIMEOUT_SECONDS))
    },
    showPage: function (_0xd5cex2) {
        this._PAGE_RENDERING_IN_PROGRESS = 1, this._CURRENT_PAGE = _0xd5cex2, this._DOM_ELEMENT.querySelector('.pdf-pro-current-page').textContent = _0xd5cex2, this._PDF_DOC.getPage(_0xd5cex2).then(function (_0xd5cex2) {
            -1 == this._PDF_WIDTH && (this._PDF_WIDTH = _0xd5cex2.getViewport(1).width, this._PDF_HEIGHT = _0xd5cex2.getViewport(1).height, 'NORMAL' == this._MODE ? (this._CANVAS_WIDTH = Math.ceil(this._DOM_ELEMENT.querySelector('.pdf-pro-canvas-container').getBoundingClientRect().width) - 2, this._CANVAS.setAttribute('width', this._CANVAS_WIDTH)) : this._CANVAS.setAttribute('width', this._VIEWER_WIDTH - 2));
            var _0xd5cex3 = this._CANVAS.width / _0xd5cex2.getViewport(1).width,
                _0xd5cex4 = _0xd5cex2.getViewport(_0xd5cex3);
            this._CANVAS.height = _0xd5cex4.height;
            var _0xd5cex5 = {
                canvasContext: this._CANVAS_CTX,
                viewport: _0xd5cex4
            };
            _0xd5cex2.render(_0xd5cex5).then(function () {
                this._PAGE_RENDERING_IN_PROGRESS = 0, 1 == this._FULL_SCREEN && (this._DOM_ELEMENT.querySelector('.pdf-pro-canvas-container').scrollTop = 0), 1 == this._INLINE_MODE_INITIALIZING ? ('IMAGE' == this._MODE && (this._DOM_ELEMENT.querySelector('.pdf-pro-image-mode').innerHTML = '<img src="' + this._CANVAS.toDataURL('image/jpeg', 1) + '" />'), this._INLINE_MODE_INITIALIZING = 0, this._VIEWER_MODAL_WIDTH = this.getModalWidth(), this._DOM_ELEMENT.querySelector('.pdf-pro-main-container').style.width = this._VIEWER_MODAL_WIDTH + 'px', this._CANVAS.setAttribute('width', this._VIEWER_MODAL_WIDTH - 2), this.showPage(1)) : 1 == this._ENABLE_ANALYTICS && this.calculatePageViewedAnalytics()
            } ['bind'](this))
        } ['bind'](this))
    },
    getModalWidth: function () {
        var _0xd5cex2 = window.innerHeight - 20 - this._PDF_META_CONTAINER_HEIGHT,
            _0xd5cex3 = Math.floor(this._PDF_WIDTH / this._PDF_HEIGHT * _0xd5cex2);
        return _0xd5cex3 > window.innerWidth - 20 ? window.innerWidth - 20 : _0xd5cex3
    },
    goInFullscreen: function () {
        var _0xd5cex2 = this._DOM_ELEMENT.querySelector('.pdf-pro-main-container');
        _0xd5cex2.requestFullscreen ? _0xd5cex2.requestFullscreen() : _0xd5cex2.mozRequestFullScreen ? _0xd5cex2.mozRequestFullScreen() : _0xd5cex2.webkitRequestFullscreen ? _0xd5cex2.webkitRequestFullscreen() : _0xd5cex2.msRequestFullscreen && _0xd5cex2.msRequestFullscreen()
    },
    goOutFullscreen: function () {
        document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen()
    }
}, PDFViewerPro.init()