﻿using Xamarin.Forms;
using MissionSupport.View;

namespace MissionSupport
{
    public partial class App : Application
    {
        public App()
        {
            InitializeComponent();

<<<<<<< HEAD
            MainPage = new MissionSupportPage();
            //MainPage = new Login();
=======
<<<<<<< HEAD
            //MainPage = new MissionSupportPage();
            MainPage = new Register();
=======
<<<<<<< HEAD
            MainPage = new MissionSupportPage();

=======
            //MainPage = new MissionSupportPage();
            MainPage = new Login();
            //Login = new Login();
>>>>>>> fbf1f1335d8da77de5065ec19f554c0e48466726
>>>>>>> 374a1ad3bc4568b3f253b6ac68effa9368cd6a3b
>>>>>>> ec70bc057dfa0659af2957938f2761978bf3d5b7
        }

        protected override void OnStart()
        {
            // Handle when your app starts
        }

        protected override void OnSleep()
        {
            // Handle when your app sleeps
        }

        protected override void OnResume()
        {
            // Handle when your app resumes
        }
    }
}