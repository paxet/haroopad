window.MenuBarView = function () {
	var gui = require('nw.gui');
	var View = new gui.Menu();

	// View.append(
	//     new gui.MenuItem({
	//         label: 'Toggle Live Preview',
	// 	      click: function() {
	// 	      	window.parent.ee.emit('menu.view.mode.toggle');
	// 	      }
	//     })
	// );
	View.append(
	    new gui.MenuItem({
	        label: i18n.t('view.mode'),
            submenu: MenuBarViewMode()
	    })
	);
	// View.append(
	//     new gui.MenuItem({
	//         label: 'Column Layout',
 //            submenu: MenuBarViewColumn()
	//     })
	// );
	// View.append(
	//     new gui.MenuItem({
	//         label: 'Reset Mode',
	// 	      click: function() {
	// 	        win.emit('view.reset.mode');
	// 	      }
	//     })
	// );
	View.append(
	    new gui.MenuItem({
          type: 'separator'
	    })
	);
	View.append(
	    new gui.MenuItem({
	        label: i18n.t('view.toggle-line-number'),
		      click: function() {
		        window.parent.ee.emit('menu.show.toggle.linenum');
		      }
	    })
	);
	View.append(
	    new gui.MenuItem({
	        label: i18n.t('view.vim-mode'),
		      click: function() {
		        window.parent.ee.emit('menu.view.toggle.vim');
		      }
	    })
	);
	// disable on v0.10
	// View.append(
	//     new gui.MenuItem({
	//         label: i18n.t('view.toggle-toc'),
	// 	      click: function() {
	// 	        window.parent.ee.emit('menu.view.toggle.toc');
	// 	      }
	//     })
	// );
	// View.append(
	//     new gui.MenuItem({
	//         label: 'Toggle Word Count',
	// 	      click: function() {
	// 	        win.emit('show.toggle.wordcount');
	// 	      }
	//     })
	// );
	View.append(
	    new gui.MenuItem({
          type: 'separator'
	    })
	);
	View.append(
	    new gui.MenuItem({
	        label: i18n.t('view.live-view-width-plus-5'),
		      click: function() {
		        window.parent.ee.emit('menu.view.plus5.width');
		      }
	    })
	);
	View.append(
	    new gui.MenuItem({
	        label: i18n.t('view.live-view-width-minus-5'),
		      click: function() {
		        window.parent.ee.emit('menu.view.minus5.width');
		      }
	    })
	);
	View.append(
	    new gui.MenuItem({
          type: 'separator'
	    })
	);
	View.append(
	    new gui.MenuItem({
	        label: i18n.t('view.font-size'),
            submenu: MenuBarViewFont()
	    })
	);
	View.append(
	    new gui.MenuItem({
          type: 'separator'
	    })
	);

	// View.append(
	//     new gui.MenuItem({
	//         label: 'Zoom',
 //            submenu: MenuBarViewZoom()
	//     })
	// );
	// View.append(
	// 	new gui.MenuItem({
	// 		type: 'separator'
	// 	})
	// );

	View.append(
		new gui.MenuItem({
		  label: i18n.t('view.enter-full-screen'),
		  click: function() {
			window.parent.ee.emit('menu.view.fullscreen');
		  }
		})
	);

	return new gui.MenuItem({ label: i18n.t('view.name'), submenu: View });
};