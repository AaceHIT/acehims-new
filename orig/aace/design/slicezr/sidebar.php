<?php $sidebar = ORIG['PIECE'] . 'sidebar' . DS; ?>
<div id="left-sidebar" class="sidebar">
	<div class="sidebar-scroll">
		<?php require($sidebar . 'user.php'); ?>
		<?php require($sidebar . 'tab.php'); ?>
		<div class="tab-content px-0" id="leftTabContent">
			<div class="tab-pane fade show active" id="menu_menu" role="tabpanel" aria-labelledby="menu-tab">
				<?php require($sidebar . 'menu.php'); ?>
			</div>
			<?php
			require($sidebar . 'submenu.php');
			require($sidebar . 'chatmenu.php');
			require($sidebar . 'theme.php');
			?>
		</div>
	</div>
</div>