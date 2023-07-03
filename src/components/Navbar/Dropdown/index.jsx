import { AiFillCaretDown } from "react-icons/ai"; 
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex items-center w-full justify-center gap-x-1.5text-sm font-semibold text-gray-900 hover:text-[#0092ff]">
          Drop
          <AiFillCaretDown className="-mr-1 h-5 w-3 text-gray-900 hover:text-[#0092ff]" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-[#fcfafb] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/article"
                  className={classNames(
                    active ? 'text-gray-900' : 'text-gray-900',
                    'block px-4 py-4 text-sm hover:text-[#0092ff]'
                  )}
                >
                  Article Details
                </Link>
              )}
            </Menu.Item>
            <hr className="h-[1.2px] w-32 ml-2" color="gray"/>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/terms"
                  className={classNames(
                    active ? 'text-gray-900' : 'text-gray-900',
                    'block px-4 py-4 text-sm hover:text-[#0092ff]'
                  )}
                >
                  Terms Conditions
                </Link>
              )}
            </Menu.Item>
            <hr className="h-[3px] w-32 ml-2" color="gray"/>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="privacy"
                  className={classNames(
                    active ? 'text-gray-900' : 'text-gray-900',
                    'block px-4 py-4 text-sm hover:text-[#0092ff]'
                  )}
                >
                  Privacy Policy
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}