# Oh My Fish
set fish_path $HOME/.oh-my-fish
set fish_theme bobthefish
source $fish_path/oh-my-fish.fish

# OSX
# defaults write com.apple.Finder AppleShowAllFiles YES # Show all files in Finder

# Paths
	# Base
	set PATH /usr/bin /usr/sbin /usr/local/bin /bin /sbin
	# MacPorts
	set PATH /opt/local/bin /opt/local/sbin /opt/local/include $PATH
	# NPM
	set PATH /usr/local/share/npm/lib /usr/local/share/npm/bin $PATH
	# Android
	set PATH ~/tools/Android/SDK/tools ~/tools/Android/SDK/platform-tools ~/tools/Android/NDK $PATH
	# Go
	set PATH /usr/local/go/bin $PATH
	# NDENV
	source ~/dotfiles/ndenv.fish

# Variables
	# Android
	set NDK_HOME ~/tools/Android/NKD
	# Go
	set GOROOT /usr/local/go

# Aliases
	# System
	alias reload "source ~/.config/fish/config.fish"
	function args
		set -l argcount (math (count $argv) - 2)
		if [ (math $argcount == 0) = 1 ]
			echo
		else
			set -l arg1 $argv[1]
			# set -l arg1 ( if [ (math $arg1 \> $argcount) = 1 ]; echo $argcount; else; echo $arg1; end; )
			if [ (math $arg1 \> $argcount) = 1 ]
				echo
			else
				set -l arg2 (if [ "$argv[2]" = "0" ]; echo (math $argcount - $arg1 + 1); else; echo $argv[2]; end;)
				set -l arg2 ( if [ (math $arg1 + $arg2 - 1 \> $argcount) = 1 ]; echo (math $argcount - $arg1 + 1); else; echo $arg2; end; )
				echo $argv[(seq (math $arg1 + 2) (math $arg1 + $arg2 + 1))]
			end
		end
	end
	# ADB
	function adbd
		set -l arg (args 1 1 $argv)
		adb devices -l | grep -i "device " | grep -i "$arg" | head -1 | sed 's/\ .*$//g'
	end
	function adbl
		adb devices -l | grep -i "device "
	end
	function adbs
		set -l device (adbd (args 1 1 $argv))
		set -l args (args 2 0 $argv)
		echo device = $device
		echo args = "$args"
		echo adb -s $device $args
		eval adb -s $device $args
	end
