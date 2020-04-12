import React from 'react';
import SubpageBox from 'components/SubpageBox';

export default class WhoWeAre extends React.Component<any>
{
	render()
	{
		return <>
			<SubpageBox>
				<h2 className="no-margin">Who we are?</h2>
				<img src="/images/other/me.jpg" style={{float: 'right', width: '386px', margin: '0px 0px 10px 15px'}} />
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales ipsum porta, eleifend nisl at, blandit risus. Nam ac malesuada erat. Integer porta lacinia felis. Mauris erat odio, vehicula quis faucibus a, molestie at urna. Aliquam sollicitudin ipsum id gravida bibendum. Morbi velit nunc, ultrices eu dui ac, viverra tincidunt nibh. Aliquam consequat tristique lorem sed condimentum. In nec accumsan libero. Mauris accumsan magna at tortor scelerisque, sit amet facilisis justo elementum. Ut eu laoreet diam, ut sagittis elit. Sed sit amet pulvinar ligula. Vestibulum pulvinar viverra diam, fringilla facilisis turpis pulvinar eget. Praesent vitae aliquet sem, vitae elementum justo. Morbi faucibus, eros sit amet venenatis volutpat, metus augue laoreet eros, ac feugiat mi justo id lacus. Donec a aliquam orci.
				</p>
				<p>
					Quisque nibh augue, fringilla condimentum iaculis mattis, elementum at libero. Sed semper ex ut tincidunt accumsan. Donec laoreet consectetur mi, ut dictum nulla euismod ac. Maecenas sit amet euismod elit. Nulla sit amet pellentesque orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel mi neque. Nunc ornare malesuada mauris quis fermentum. Maecenas convallis sagittis lectus in sodales. Aliquam viverra quam vel sagittis porta. Integer tristique tempus viverra. Aliquam egestas urna et dolor eleifend luctus. In porttitor consequat consequat.
				</p>
				<p>
					Quisque venenatis tempus nisi a tincidunt. Vestibulum varius laoreet massa, et consectetur dui varius id. Aliquam eget ante metus. Nam egestas risus eu dolor vestibulum varius. Aenean turpis tellus, hendrerit et ornare sit amet, finibus non nisi. Praesent pretium massa sit amet sodales lacinia. Vestibulum accumsan quis nisi at imperdiet.
				</p>
				<p>
					Fusce pulvinar tellus felis, sit amet efficitur diam malesuada non. Vivamus pulvinar aliquam sem vel cursus. Nulla ultricies auctor enim non hendrerit. Aliquam maximus ornare ornare. Mauris leo massa, sodales nec ornare eu, egestas placerat ante. Quisque in finibus nulla. In metus mauris, congue at pulvinar nec, porta vel lorem. Vivamus ullamcorper est a tincidunt eleifend. Fusce nec quam non odio imperdiet euismod imperdiet sed velit. Praesent laoreet, nibh at finibus malesuada, quam tellus ultrices dolor, vitae euismod elit lectus sit amet ex. Nulla massa eros, vehicula ac aliquet ac, sagittis in dui. Donec sed ornare nulla. Aenean molestie sit amet justo vitae venenatis. Etiam interdum at mauris non aliquam. Nulla luctus leo in nulla vulputate tempus. In molestie turpis tincidunt massa posuere placerat.
				</p>
				<p>
					Suspendisse in sagittis purus, sed bibendum metus. Cras consequat sed nulla non accumsan. Donec quis ligula a nunc sollicitudin sodales. Quisque purus libero, pulvinar et cursus vitae, tempus et urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin condimentum sed odio at sollicitudin. Nunc risus lorem, bibendum bibendum dignissim nec, egestas nec diam.
				</p>
			</SubpageBox>
		</>;
	}
}
