﻿using System;
using System.Linq;
using System.Threading.Tasks;

using Xamarin.Forms.Maps;

namespace MissionSupport.Model
{
    public class Site
    {
        public string Name { get; private set; }
        public string Address { get; private set; }
        public Position Location { get; private set; }
        public DateTime CreatedOn { get; private set; }

        public Site(string name, string address, Position location, DateTime createdOn)
        {
            Name = name;
            Address = address;
            Location = location;
            CreatedOn = createdOn;
        }

        public Site(string name, string address)
        {
            Name = name;
            Address = address;
            Task.Run(async () => await generateLocation());
            CreatedOn = DateTime.Now;
        }

        private async Task generateLocation()
        {
            Geocoder geocoder = new Geocoder();
            Location = (await geocoder.GetPositionsForAddressAsync(Address)).First();
        }

        public override int GetHashCode()
        {
            return Name.GetHashCode() + 19 * Address.GetHashCode() + 23 * Location.GetHashCode() + 31 * CreatedOn.GetHashCode();
        }

        public static async Task<bool> validAddress(string address)
        {
            Geocoder geocoder = new Geocoder();
            var positions = await geocoder.GetPositionsForAddressAsync(address);

            try {
                Position position = positions.First();
            } catch (InvalidOperationException) {
                return false;
            }

            return true;
        }
    }
}
