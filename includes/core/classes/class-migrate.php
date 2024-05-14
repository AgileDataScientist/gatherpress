<?php
/**
 * The Migrate class defines methods relevant to Exporting & Importing.
 *
 * This file contains the Migrate class, which is responsible for migration of data,
 * that is not saved in WordPress' default db tables, within the GatherPress plugin.
 *
 * @package GatherPress\Core
 * @since 1.0.0
 */

namespace GatherPress\Core;

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit; // @codeCoverageIgnore

/**
 * Class Migrate.
 *
 * Provides common migration methods.
 *
 * @since 1.0.0
 */
class Migrate {

	/**
	 * List of non-existent post_meta keys with array values containing getter and setter callback definitions.
	 *
	 * @since 1.0.0
	 * @var array $pseudopostmetas
	 */
	protected static $pseudopostmetas = array(
		'gatherpress_datetimes' => array(
			'export_callback' => array( '\GatherPress\Core\Export', 'datetimes_callback' ),
			'import_callback' => array( '\GatherPress\Core\Import', 'datetimes_callback' ),
		),
	);

	/**
	 *
	 *
	 * @since 1.0.0
	 *
	 * @return array
	 */
	public static function get_pseudopostmetas(): array {
		/**
		 * Filters the ...
		 *
		 * @since 1.0.0
		 *
		 * @param array $pseudopostmetas ...
		 * @return array ...
		 */
		return (array) apply_filters( 'gatherpress_pseudopostmetas', self::$pseudopostmetas );
	}
}
