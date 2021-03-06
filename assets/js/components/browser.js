'use strict'

import 'select2'

export default class Browser {
  constructor(el) {
    const self = this

    this._el = $(el)
    this._tabs = this._el.find('[data-role="tab"]')
    this._tabPanels = this._el.find('[data-role="tab-panel"]')
    this._fileSwitcher = this._el.find('[data-role="switcher"]')
    this._codeViews = this._el.find('[data-role="code"]')
    this._resourcePreview = this._el.find('[data-role="resource-preview"]')
    this._activeClass = 'is-active'
    this._initTabs()

    $('.FileBrowser-select')
      .select2({
        minimumResultsForSearch: Infinity,
      })
      .on('change', function () {
        $(this)
          .closest('.FileBrowser')
          .find('[data-role="resource-preview"]')
          .removeClass(self._activeClass)
        $(`#${this.value}`).addClass(self._activeClass)
      })
  }

  _initTabs() {
    const ac = this._activeClass
    const tabs = this._tabs
    tabs.on('click', (e) => {
      const link = $(e.target).closest('a')
      const tab = link.parent()
      const show = !tab.hasClass(ac)
      tabs.removeClass(ac)
      tab.toggleClass(ac, show)
      this._tabPanels.removeClass(ac)
      this._tabPanels.filter(link.attr('href')).toggleClass(ac, show)
      return false
    })
  }
}
