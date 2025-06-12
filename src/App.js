import React from 'react';
import { Button, Input, Space, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './App.css';
import TestComponent from './TestComponent';

const { Title } = Typography;

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <Title level={2} className="text-center mb-6 text-red-500">Roll Call App</Title>

        <div className="mb-6">
          <Space direction="vertical" size="large" className="w-full">
            <Input
              placeholder="Enter name"
              prefix={<UserOutlined />}
              className="rounded-md"
            />

            <div className="flex justify-center">
              <Button type="primary" className="bg-blue-500 hover:bg-blue-600">
                Submit
              </Button>
            </div>
          </Space>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="text-lg font-medium mb-2 text-gray-800">Tailwind CSS Features</h3>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Responsive design with breakpoints</li>
              <li>Utility-first approach</li>
              <li>Customizable design system</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="text-lg font-medium mb-2 text-gray-800">Ant Design Features</h3>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Rich component library</li>
              <li>Enterprise-level UI design</li>
              <li>Customizable themes</li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <TestComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
