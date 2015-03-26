/* This js file will not work until all line breaks are removed from any function elements below. Complete code for each function must appear on only one line. (Is this correct?) */

/* MINIFIER will minify this js file: Alt-Ctrl-Shift-M */

function testWrite() { document.write('<p>[ This is a test. If you are reading this, then modal.min.js has loaded. ]</p><p>&nbsp;</p>'); } 

function loadModals() { document.write('


<?php // ACCESS MODAL IS BELOW ?>

<div class="modal fade" id="accessModal" tabindex="-1" role="dialog" aria-labelledby="accessModal" aria-hidden="true">
	<div class="modal-dialog modal-sm">
		<div class="modal-content" style="width: 30rem; min-width: 30rem; max-width: 30rem;">

		<div class="modal-header"> <?php // start MODAL HEADER ?> 
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				<div style="background-size: cover;">
					<img class="resize-logo-modal-header" src="http://glyder.com/test/image/logo/vendor/logo-edible-seattle-sm.png">
					<img class="resize-logo-modal-header" src="http://glyder.com/test/image/modal/bullet.png">
					<img class="resize-logo-modal-header" src="http://glyder.com/test/image/modal/access.png">
				</div>
		</div> <?php // end modal header ?> 

		<div style="clear: both;"></div> <?php // clear any floats above ?> 

		<div class="modal-body"> <?php // start MODAL BODY ?> 

			<div class="pod0 podrf brdr brdr-l brdr-t brdr-r"> <?php // start pod0 here ?> 
				<span class="text-pod0"><div>Get instant access!</div></span>
			</div> <?php // end pod0 ?> 

			<div class="pod1 podfr brdr brdr-r brdr-b brdr-l"> <?php // start pod1 here ?> 
				<div id="access-container"> <?php // start div table container ?> 
					<div id="access-row"> <?php // start row 1 ?> 
						<div id="access-cell-1">
							<span class="vertical-align-middle"><div style="display:inline;">This&nbsp;</div><div style="display:inline;" id="div_item_type">[item_type]</div></span>
						</div> <?php // /cell-1 ?> 
						<div id="access-cell-2">
							<div>
								<button type="button" class="btn standard-button btn-primary" onclick="glyderBuyItemAndGo();"><div id="div_item_cost">[div-item-cost]</div></button>
							</div>
						</div> <?php // /cell-2 ?> 
					</div> <?php // /row 1 ?> 
				</div> <?php // /first access-container div table ?>

				<div style="clear: both;"></div> <?php // clear any floats above ?> 

				<div id="access-container"> <?php // start access-container 2 for next div table ?> 
				<p class="access-row-sep"> </p> <?php // clear any floats above and separate table rows ?> 

					<div id="access-row"> <?php // start row 2 ?> 
							<div class="item-info-tag"><div class="item-info-description" id="div_item_description">A 70-character [item_description] can go here here here here here here.</div></div>
					</div> <?php // /row 2 ?>

				<div style="clear: both;"></div> <?php // clear any floats above ?> 
				</div> <?php // /access-container 2 ?> 

			<div style="clear: both;"></div> <?php // clear any floats above ?> 
			</div> <?php // end pod1 here ?> 

			<div class="pod0-2-white podrf brdr brdr-l brdr-t brdr-r"> 
				<span class="text-pod0"><div>More options:</div></span>
			</div> <?php // end pod0 ?> 

			<div class="pod1-white podfr brdr brdr-r brdr-b brdr-l"> 
					<div id="access-container"> <?php // start div table container ?> 

						<div id="access-row-int"> <?php // start row 2 ?> 
							<div id="access-cell-1">
								<span class="vertical-align-middle">24-Hour&nbsp;Site&nbsp;Pass</span>
							</div> <?php // /cell-1 ?> 
							<div id="access-cell-2">
								<div>
									<button type="button" class="btn standard-button btn-primary" onclick="glyderBuyDaypassAndGo();""><div id="div_daypass_cost">$1.00</div></button>
								</div>
							</div> <?php // /cell-2 ?> 
						</div> <?php // /row 2 ?> 

					<p class="access-row-sep"> </p> <?php // clear any floats above and separate table rows ?> 

						<div id="access-row"> <?php // start row 3 ?> 
							<div id="access-cell-1">
								<span class="vertical-align-middle">Subscribe</span>
							</div> <?php // /cell-1 ?> 
							<div id="access-cell-2">
								<div>
									<button type="button" class="btn standard-button btn-primary btn-secondary">Options...</button>
								</div>
							</div> <?php // /cell-2 ?> 
						</div> <?php // /row 3 ?> 

					<p class="access-row-sep"> </p> <?php // clear any floats above and separate table rows ?> 

						<div id="access-row">
							<div id="access-cell-1">
								<span class="vertical-align-middle">No, Thanks</span>
							</div>
							<div id="access-cell-2">
								<button type="button" class="btn btn-primary standard-button close-button" data-dismiss="modal" aria-hidden="true" style="font-size: 1.2rem;">Close</button>
							</div>
						</div>
					</div>
				</div> <?php // end pod2 here ?> 

			</div> <?php // End Modal Body here ?> 

			<div style="clear: both;"></div> <?php // clear any floats above ?> 

			<div class="modal-footer"><?php // start MODAL FOOTER here ?> 
				<div> <?php // start footer div ?> 
					
						<div style="background-size: cover; display: inline-block;">
							<a href="#"><span class="vertical-align-middle"><img class="resize-glyder-icon-footer" src="http://glyder.com/test/image/modal/icon-glyder-sm.png">&nbsp;&nbsp;Glyder&nbsp;Powered&nbsp;</span></a>
						</div>

						<div style="display: inline-block; float: right;"><?php // start forgot pw div ?><a href="#"><span class="vertical-align-middle">My&nbsp;Account</span></a> &nbsp;|&nbsp; <a href="#" onclick="glyderLogout();"><span class="vertical-align-middle">Log&nbsp;Out</span></a>
						</div> <?php // /forgot pw ?> 

				</div> <?php // /footer div ?> 
			</div> <?php // /modal-footer ?> 
			
		</div> <?php // end modal content ?>
	</div> <?php // end modal-dialog ?>
</div> <?php // end accessModal ?>


<?php // LOGIN MODAL IS BELOW ?>

<div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModal" aria-hidden="true">
	<div class="modal-dialog modal-sm">
		<div class="modal-content" style="width: 30rem; min-width: 30rem; max-width: 30rem;">

		<div class="modal-header"> <?php // start MODAL HEADER ?> 
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
			<div style="background-size: cover;">
				<img class="resize-logo-modal-header" src="http://glyder.com/test/image/logo/vendor/logo-edible-seattle-sm.png">
				<img class="resize-logo-modal-header" src="http://glyder.com/test/image/modal/bullet.png">
				<img class="resize-logo-modal-header" src="http://glyder.com/test/image/modal/login.png">
			</div>
		</div> <?php // end modal header ?> 

		<div style="clear: both;"></div> <?php // clear any floats above ?> 

		<div class="modal-body"> <?php // start MODAL BODY ?> 

			<div class="pod0 podrf brdr brdr brdr-l brdr-t brdr-r"> <?php // start pod0 here ?> 
				<span class="text-pod0"><div>Log in via social:</div></span>
			</div> <?php // end pod0 ?> 

			<div class="pod1 podfr brdr brdr-r brdr-b brdr-l"> <?php // start pod1 here ?> 

					<div class="social-icon-container">
					<a href="#"><img class="resize-social-icon" src="http://glyder.com/test/image/modal/icon-facebook.73x73.png"></a>&nbsp;&nbsp;<a href="#"><img class="resize-social-icon" src="http://glyder.com/test/image/modal/icon-twitter.73x73.png"></a>&nbsp;&nbsp;<a href="#"><img class="resize-social-icon" src="http://glyder.com/test/image/modal/icon-linkedin.73x73.png"></a>&nbsp;&nbsp;<a href="#"><img class="resize-social-icon" src="http://glyder.com/test/image/modal/icon-google.73x73.png"></a>&nbsp;&nbsp;<a href="#"><img class="resize-social-icon" src="http://glyder.com/test/image/modal/icon-glyder.73x73.png"></a></div>

			<div style="clear: both;"></div> <?php // clear any floats above ?> 
			</div> <?php // end pod1 ?> 

			<div style="clear: both;"> </div>

			<div class="pod0 podrf brdr brdr-l brdr-t brdr-r" style="margin: 0.75rem 0 0;"> 
				<span class="text-pod0"><div>Or log in here:</div></span>
			</div> <?php // end pod0 ?> 

			<div class="pod1 podfr brdr brdr-r brdr-b brdr-l"> <?php // start pod1 here ?> 

				<div class="form-instrux">Email or Phone #:</div>

				<div><input type="username" class="form-control" id="loginUsername" placeholder="Email or Phone #"></div>

				<div class="form-separator">&nbsp;</div>

				<div class="form-instrux">Password:</div>

				<div><input type="password" class="form-control" id="loginPassword" placeholder="Password"></div>

				<div class="checkbox" style="margin: 1.8rem 0 0 1rem;">
					<label class="checkbox-label"><input type="checkbox"><div style="margin: -.3rem 0 0;">Remember me</div></label>
				</div>

				<div style="margin: 1.3rem 0 0 0"><button type="button" class="btn btn-primary standard-button" onclick="glyderLogin();">Log In</button></div>

				<div style="clear: both;"></div> <?php // clear any floats above ?> 

				</div> <?php // end pod1 here ?> 

				<div class="pod2-white podrr brdr brdr-all"> <?php // start pod2 here ?> 
					<div id="login-nv-container">
						<div id="login-nv-row">
							<div id="login-nv-cell-1">
								<p style="margin: -.2rem 0;">Need&nbsp;an&nbsp;account?&nbsp; It&#39;s&nbsp;free!</p>
							</div>
							<div id="login-nv-cell-2">
								<button type="button" class="btn btn-primary standard-button clear-button" onclick="glyderSignUp();">Sign&nbsp;Up...</button>
							</div>
						</div>
					</div>
				</div> <?php // end pod 2 here ?> 
			</div> <?php // End Modal Body here ?> 

			<div style="clear: both;"></div> <?php // clear any floats above ?> 

			<div class="modal-footer"><?php // start MODAL FOOTER here ?> 
				<div> <?php // start footer div ?> 
					<div style="background-size: cover; display: inline-block;">
						<a href="#"><span class="vertical-align-middle"><img class="resize-glyder-icon-footer" src="http://glyder.com/test/image/modal/icon-glyder-sm.png">&nbsp;&nbsp;Glyder&nbsp;Powered&nbsp;</span></a>
					</div>
					<div style="display: inline-block; float: right;"> <?php // start forgot pw div ?><a href="#"><span class="vertical-align-middle">Forgot&nbsp;Password?</span></a>
					</div> <?php // /forgot pw ?> 
				</div> <?php // /footer div ?> 
			</div> <?php // /modal-footer ?> 

		</div> <?php // end modal content ?>
	</div> <?php // end modal-dialog ?>
</div> <?php // end loginModal ?>


<?php // SIGNUP MODAL IS BELOW ?>

<div class="modal fade" id="signupModal" tabindex="-1" role="dialog" aria-labelledby="signupModal" aria-hidden="true">
	<div class="modal-dialog modal-sm">
		<div class="modal-content" style="width: 30rem; min-width: 30rem; max-width: 30rem;">

		<div class="modal-header"> <?php // start MODAL HEADER ?> 
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
			<div style="background-size: cover;">
				<img class="resize-logo-modal-header" src="http://glyder.com/test/image/logo/vendor/logo-edible-seattle-sm.png">
				<img class="resize-logo-modal-header" src="http://glyder.com/test/image/modal/bullet.png">
				<img class="resize-logo-modal-header" src="http://glyder.com/test/image/modal/signup.png">
			</div>
		</div> <?php // end modal header ?> 

		<div style="clear: both;"></div> <?php // clear any floats above ?> 

		<div class="modal-body"> <?php // start MODAL BODY ?> 
			<div class="pod0 podrf brdr brdr-l brdr-t brdr-r"> <?php // start pod0 here ?> 

				<span class="text-pod0"><div>Sign up via social:</div></span>

			</div> <?php // end pod0 ?> 

			<div class="pod1 podfr brdr brdr-r brdr-b brdr-l"> <?php // start pod1 here ?> 

					<div class="social-icon-container">
					<a href="#"><img class="resize-social-icon" src="http://glyder.com/test/image/modal/icon-facebook.73x73.png"></a>&nbsp;&nbsp;<a href="#"><img class="resize-social-icon" src="http://glyder.com/test/image/modal/icon-twitter.73x73.png"></a>&nbsp;&nbsp;<a href="#"><img class="resize-social-icon" src="http://glyder.com/test/image/modal/icon-linkedin.73x73.png"></a>&nbsp;&nbsp;<a href="#"><img class="resize-social-icon" src="http://glyder.com/test/image/modal/icon-google.73x73.png"></a>&nbsp;&nbsp;<a href="#"><img class="resize-social-icon" src="http://glyder.com/test/image/modal/icon-glyder.73x73.png"></a></div>

			<div style="clear: both;"></div> <?php // clear any floats above ?> 
			</div> <?php // end pod1 ?> 

			<div style="clear: both;"> </div>

			<div class="pod0 podrf brdr brdr-l brdr-t brdr-r" style="margin: 0.75rem 0 0;"> <?php // start pod0 here ?> 

				<span class="text-pod0"><div>Or sign up here:</div></span>

			</div> <?php // end pod0 ?> 

			<div class="pod1 podfr brdr brdr-r brdr-b brdr-l"> <?php // start pod1 here ?> 

				<div class="form-instrux">Email or Phone #:</div>

				<div><input type="username" class="form-control" id="signupUsername" placeholder="Email or Phone #"></div>

				<div class="form-instrux-confirm">Confirm Email or Phone #:</div>

				<div><input type="username" class="form-control" id="signupUsername-confirm" placeholder="Confirm Email or Phone #"></div>

				<div class="checkbox" style="margin: 1.8rem 0 0 1rem;">
					<label class="checkbox-label"><input type="checkbox"><div style="margin: -.3rem 0 0;">Remember me</div></label>
				</div>

				<div style="margin: 1.3rem 0 0 0"><button type="button" class="btn btn-primary standard-button">Sign Up</button></div>

				<div style="clear: both;"></div> <?php // clear any floats above ?> 

				</div> <?php // end pod1 here ?> 

				<div class="pod2-white podrr brdr brdr-all" display="none;"> <?php // start pod2 here ?> 
					<div id="login-nv-container">
						<div id="login-nv-row">
							<div id="login-nv-cell-1">
								<p style="margin: -.2rem 0;">Already have an account?</p>
							</div>
							<div id="login-nv-cell-2">
								<button type="button" class="btn btn-primary standard-button clear-button" onclick="showLoginPage();">Log&nbsp;In...</button>
							</div>
						</div>
					</div>
				</div> <?php // end pod2 here ?> 
			</div> <?php // end Modal Body here ?> 

			<div style="clear: both;"></div> <?php // clear any floats above ?> 

			<div class="modal-footer"><?php // start MODAL FOOTER here ?> 
				<div> <?php // start footer div ?> 
					<div style="background-size: cover; display: inline-block;">
						<a href="#"><span class="vertical-align-middle"><img class="resize-glyder-icon-footer" src="http://glyder.com/test/image/modal/icon-glyder-sm.png">&nbsp;&nbsp;Glyder&nbsp;Powered&nbsp;</span></a>
					</div>
					<div style="display: inline-block; float: right;"><?php // start forgot pw div ?><a href="#"><span class="vertical-align-middle">Forgot&nbsp;Password?</span></a>
					</div> <?php // /forgot pw ?> 
				</div> <?php // /footer div ?> 
			</div> <?php // /modal-footer ?> 

		</div> <?php // end modal content ?>
	</div> <?php // end modal-dialog ?>
</div> <?php // end signupModal ?>


<?php // AUTOPAY MODAL IS BELOW ?>

<div class="modal fade" id="autoPayModal" tabindex="-1" role="dialog" aria-labelledby="autoPayModal" aria-hidden="true">
	<div class="modal-dialog modal-sm">
		<div class="modal-content" style="width: 30rem; min-width: 30rem; max-width: 30rem;">

		<div class="modal-header"> <?php // start MODAL HEADER ?> 
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				<div style="background-size: cover; text-align:center;">
					<img class="resize-logo-modal-header" src="http://glyder.com/test/image/logo/vendor/logo-edible-seattle-sm.png">
				</div>
		</div> <?php // end modal header ?> 

		<div style="clear: both;"></div> <?php // clear any floats above ?> 

		<div class="modal-body"> <?php // start MODAL BODY ?> 

				<div class="pod0 pod0-center podrf brdr brdr-l brdr-t brdr-r"> <?php // start pod0 here ?> 

					<span class="text-pod0"><div>Your page is loading...</div></span>

				</div> <?php // end pod0 ?> 

				<div class="pod1 podfr brdr brdr-l brdr-r brdr-b"> <?php // start pod1 PROGRESS BAR here ?> 
					
					<div id="autopay-container">
						<div id="autopay-row">
							<div id="autopay-cell-1">

								<div class="progress-bar-div">
									<img class="resize-progress-bar-img" src="http://glyder.com/test/image/modal/progress-bar.gif">
								</div>

							</div>
						</div>
					</div>
				</div> <?php // end pod1 here ?> 

				<div style="clear: both;"></div> <?php // clear any floats above ?> 

				<div class="pod2-white podrr brdr brdr-all"> <?php // start pod2 THANK YOU RECEIPT here ?> 
					<div id="autopay-container">
						<div id="autopay-row">
							<div id="autopay-cell-1">
								Thank&nbsp;you!
							</div>
							<div id="autopay-cell-2" style="text-align:right;">
								Amount paid: $________
							</div>
						</div>
					</div>
				</div> <?php // end pod2 here ?> 

			</div> <?php // End Modal Body here ?> 

			<div style="clear: both;"></div> <?php // clear any floats above ?> 

			<div class="modal-footer"><?php // start MODAL FOOTER here ?> 
				<div> <?php // start footer div ?> 
					<div style="background-size: cover; display: inline-block;">
						<a href="#"><span class="vertical-align-middle"><img class="resize-glyder-icon-footer" src="http://glyder.com/test/image/modal/icon-glyder-sm.png">&nbsp;&nbsp;Glyder&nbsp;Powered&nbsp;</span></a>
					</div>
					<div style="display: inline-block; float: right;"><?php // start forgot pw div ?><a href="#"><span class="vertical-align-middle">My&nbsp;Account</span></a>
					</div> <?php // /forgot pw ?> 
				</div> <?php // /footer div ?> 
			</div> <?php // /modal-footer ?> 

		</div> <?php // end modal content ?>
	</div> <?php // end modal-dialog ?>
</div> <?php // end autoPayModal ?>


<?php // PREPAID MODAL IS BELOW ?>

<div class="modal fade" id="prePaidModal" tabindex="-1" role="dialog" aria-labelledby="prePaidModal" aria-hidden="true">
	<div class="modal-dialog modal-sm">
		<div class="modal-content" style="width: 30rem; min-width: 30rem; max-width: 30rem;">

		<div class="modal-header"> <?php // start MODAL HEADER ?> 
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				<div style="background-size: cover; text-align:center;">
					<img class="resize-logo-modal-header" src="http://glyder.com/test/image/logo/vendor/logo-edible-seattle-sm.png">
				</div>
		</div> <?php // end modal header ?> 

		<div style="clear: both;"></div> <?php // clear any floats above ?> 

		<div class="modal-body"> <?php // start MODAL BODY ?> 
			<div class="pod0 pod0-center podrf brdr brdr-l brdr-t brdr-r"> <?php // start pod0 here ?> 

				<span class="text-pod0"><div>You\'re good to go!</div></span>

			</div> <?php // end pod0 ?> 

			<div class="pod1 podfr brdr brdr-r brdr-b brdr-l"> <?php // start pod1 here ?> 

					<div id="autopay-container"> <?php // start div table container ?> 

						<div id="access-row"> <?php // start row 1 ?> 
							<div id="access-cell-1-center">
								<div class="vertical-align-middle">

									<div class="pod-stoplight">
										<div class="stoplight pale-red"></div>
										<div class="stoplight pale-yellow"></div>
										<div class="stoplight spin-speed spin-Green"></div>
									</div>	

								</div>
							</div> <?php // /cell-1 ?> 
						</div> <?php // /row 1 ?> 

		<div style="clear: both;"></div> <?php // clear any floats above ?> 

					</div> <?php // /access-container ?> 

				<div style="clear: both;"></div> <?php // clear any floats above ?> 
				</div> <?php // end pod1 here ?> 

				<div style="clear: both;"></div> <?php // clear any floats above ?> 

				<div class="pod2-white podrr brdr brdr-all"> <?php // start pod2 THANK YOU RECEIPT here ?> 
					<div id="autopay-container">

						<div id="access-row"> <?php // start row 1 ?> 
							<div id="access-cell-1-center">
								<div class="vertical-align-middle">
									<p><div id="div_access_message">Your account includes <strong>free&nbsp;access</strong> to this premium content.</div></p>
								</div>
							</div> <?php // /cell-1 ?> 
						</div> <?php // /row 1 ?> 

					</div>
				</div> <?php // end pod2 here ?> 

			</div> <?php // End Modal Body here ?> 

			<div style="clear: both;"></div> <?php // clear any floats above ?> 

			<div class="modal-footer"><?php // start MODAL FOOTER here ?> 
				<div> <?php // start footer div ?> 
					<div style="background-size: cover; display: inline-block;">
						<a href="#"><span class="vertical-align-middle"><img class="resize-glyder-icon-footer" src="http://glyder.com/test/image/modal/icon-glyder-sm.png">&nbsp;&nbsp;Glyder&nbsp;Powered&nbsp;</span></a>
					</div>
					<div style="display: inline-block; float: right;"><?php // start forgot pw div ?><a href="#"><span class="vertical-align-middle">My&nbsp;Account</span></a> &nbsp;|&nbsp; <a href="#" onclick="glyderLogout();"><span class="vertical-align-middle">Log&nbsp;Out</span></a>
					</div> <?php // /forgot pw ?> 
				</div> <?php // /footer div ?> 
			</div> <?php // /modal-footer ?> 

		</div> <?php // end modal content ?>
	</div> <?php // end modal-dialog ?>
</div> <?php // end prePaidModal ?>

'); 
} 
