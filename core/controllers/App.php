<?php
abstract class App
{
	public static function render()
	{
		echo "var app = angular.module('".$array_ini['app']."',[]);";
	}
}